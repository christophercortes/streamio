import { gunzipSync } from "zlib";

const EPG_URL =
    "https://epgshare01.online/epgshare01/epg_ripper_CL1.xml.gz";

export type Program = {
    title: string;
    description?: string;
    startTime: Date;
    endTime: Date;
};

export type ChannelSchedule = {
    currentProgram: Program | null;
    nextProgram: Program | null;
};

/**
 * Parse an XMLTV date.
 *
 * Example:
 * 20260908180000 -0300
 *
 * XMLTV dates normally look like:
 * YYYYMMDDHHmmss +HHMM
 */
function parseXmltvDate(value: string): Date {
    const match = value.match(
        /^(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})(?:\s*([+-])(\d{2})(\d{2}))?/
    );

    if (!match) {
        throw new Error(`Invalid XMLTV date: ${value}`);
    }

    const [
        ,
        year,
        month,
        day,
        hour,
        minute,
        second,
        sign,
        offsetHours,
        offsetMinutes,
    ] = match;

    const isoDate =
        `${year}-${month}-${day}T${hour}:${minute}:${second}` +
        (sign
            ? `${sign}${offsetHours}:${offsetMinutes}`
            : "Z");

    return new Date(isoDate);
}

/**
 * Decode common XML entities.
 */
function decodeXmlEntities(text: string): string {
    return text
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'");
}

/**
 * Extract the contents of an XML tag.
 *
 * Supports normal XML and CDATA.
 */
function extractTag(
    block: string,
    tag: string
): string | undefined {
    const regex = new RegExp(
        `<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`,
        "i"
    );

    const match = block.match(regex);

    if (!match) {
        return undefined;
    }

    return decodeXmlEntities(
        match[1]
            .replace(
                /<!\[CDATA\[([\s\S]*?)\]\]>/g,
                "$1"
            )
            .trim()
    );
}

/**
 * Download and decompress the EPG XML.
 *
 * Next.js will cache the response for 6 hours.
 */
async function getEpgXml(): Promise<string> {
    const response = await fetch(EPG_URL, {
        next: {
            revalidate: 21600,
        },
    });

    if (!response.ok) {
        throw new Error(
            `Failed to fetch EPG: ${response.status} ${response.statusText}`
        );
    }

    const compressed = Buffer.from(
        await response.arrayBuffer()
    );

    const xml = gunzipSync(compressed).toString("utf-8");

    return xml;
}

/**
 * Get all programs belonging to one channel.
 */
function getProgramsForChannel(
    xml: string,
    tvgId: string
): Program[] {
    const programs: Program[] = [];

    const programmeRegex =
        /<programme\b([^>]*)>([\s\S]*?)<\/programme>/gi;

    let match: RegExpExecArray | null;

    while ((match = programmeRegex.exec(xml)) !== null) {
        const attributes = match[1];
        const block = match[2];

        const channelMatch = attributes.match(
            /\bchannel=["']([^"']+)["']/i
        );

        const startMatch = attributes.match(
            /\bstart=["']([^"']+)["']/i
        );

        const stopMatch = attributes.match(
            /\bstop=["']([^"']+)["']/i
        );

        if (
            !channelMatch ||
            !startMatch ||
            !stopMatch
        ) {
            continue;
        }

        const programChannel = channelMatch[1];

        // Only keep programs for the requested channel.
        if (programChannel !== tvgId) {
            continue;
        }

        const title = extractTag(block, "title");

        if (!title) {
            continue;
        }

        const description = extractTag(
            block,
            "desc"
        );

        let startTime: Date;
        let endTime: Date;

        try {
            startTime = parseXmltvDate(
                startMatch[1]
            );

            endTime = parseXmltvDate(
                stopMatch[1]
            );
        } catch {
            continue;
        }

        programs.push({
            title,
            description,
            startTime,
            endTime,
        });
    }

    return programs.sort(
        (a, b) =>
            a.startTime.getTime() -
            b.startTime.getTime()
    );
}

/**
 * Get programs for multiple channels.
 *
 * IMPORTANT:
 * The EPG XML is downloaded only once.
 */
export async function getProgramsForChannels(
    tvgIds: string[]
): Promise<Record<string, Program[]>> {
    if (tvgIds.length === 0) {
        return {};
    }

    const xml = await getEpgXml();

    const result: Record<string, Program[]> = {};

    for (const tvgId of tvgIds) {
        result[tvgId] = getProgramsForChannel(
            xml,
            tvgId
        );
    }

    return result;
}

/**
 * Get the current and next program for multiple channels.
 *
 * This is the main function your channel page can use.
 */
export async function getChannelSchedules(
    tvgIds: string[]
): Promise<Record<string, ChannelSchedule>> {
    if (tvgIds.length === 0) {
        return {};
    }

    const allPrograms =
        await getProgramsForChannels(tvgIds);

    const now = new Date();

    const schedules: Record<
        string,
        ChannelSchedule
    > = {};

    for (const tvgId of tvgIds) {
        const programs =
            allPrograms[tvgId] ?? [];

        const currentProgram =
            programs.find(
                (program) =>
                    program.startTime <= now &&
                    program.endTime > now
            ) ?? null;

        const nextProgram =
            programs.find(
                (program) =>
                    program.startTime > now
            ) ?? null;

        schedules[tvgId] = {
            currentProgram,
            nextProgram,
        };
    }

    return schedules;
}

/**
 * Get the current program for one channel.
 */
export async function getCurrentProgram(
    tvgId: string
): Promise<Program | null> {
    const schedules =
        await getChannelSchedules([tvgId]);

    return (
        schedules[tvgId]?.currentProgram ??
        null
    );
}

/**
 * Get the next program for one channel.
 */
export async function getNextProgram(
    tvgId: string
): Promise<Program | null> {
    const schedules =
        await getChannelSchedules([tvgId]);

    return (
        schedules[tvgId]?.nextProgram ??
        null
    );
}

export async function debugFindEpgChannel(
    search: string
) {
    const xml = await getEpgXml();

    const channelRegex =
        /<channel\b([^>]*)>([\s\S]*?)<\/channel>/gi;

    const results: {
        id: string;
        names: string[];
    }[] = [];

    let match: RegExpExecArray | null;

    while ((match = channelRegex.exec(xml)) !== null) {
        const attributes = match[1];
        const block = match[2];

        const idMatch = attributes.match(
            /\bid=["']([^"']+)["']/i
        );

        if (!idMatch) {
            continue;
        }

        const names: string[] = [];

        const displayNameRegex =
            /<display-name[^>]*>([\s\S]*?)<\/display-name>/gi;

        let nameMatch: RegExpExecArray | null;

        while (
            (nameMatch =
                displayNameRegex.exec(block)) !== null
        ) {
            names.push(
                nameMatch[1]
                    .replace(
                        /<!\[CDATA\[([\s\S]*?)\]\]>/g,
                        "$1"
                    )
                    .trim()
            );
        }

        const matchesSearch =
            names.some((name) =>
                name
                    .toLowerCase()
                    .includes(search.toLowerCase())
            ) ||
            idMatch[1]
                .toLowerCase()
                .includes(search.toLowerCase());

        if (matchesSearch) {
            results.push({
                id: idMatch[1],
                names,
            });
        }
    }

    console.log(
        `===== EPG RESULTS FOR "${search}" =====`
    );

    console.table(results);

    return results;
}