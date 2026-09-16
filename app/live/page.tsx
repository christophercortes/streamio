import { notFound } from "next/navigation";
import { channels } from "../lib/channels"
import VideoPlayer from "../ui/VideoPlayer"
import Image from "next/image";
import Link from "next/link";
import { getChannelSchedules, debugFindEpgChannel } from "../lib/epg";

function formatTime(date: Date) {
    return new Intl.DateTimeFormat("en-us", {
        hour: "numeric",
        minute: "2-digit",
    }).format(date);
}

export default async function LiveTV() {

    // const epgResults = await debugFindEpgChannel("");
    // console.log(epgResults);

    const channel = channels.find(
        (channel) => channel.id === Number(1)
    );

    if (!channel) {
        notFound();
    }

    const tvgIds = channels.map((channel) => channel.tvgId).filter((tvgId): tvgId is string => Boolean(tvgId));
    const schedules = await getChannelSchedules(tvgIds);

    return (
        <main className="min-h-screen">
            <section className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
                <div className="mb-5">
                    <h1 className="mt-5 text-2xl font-bold tracking-tight sm:text-3xl">
                        Live Streaming
                    </h1>
                    <p className="mt-1 text-sm text-zinc-400 sm:text-base">
                        {channel.name}
                    </p>
                </div>
                <div className="relative aspect-video overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-2xl">
                    {channel.streamUrl ? (
                        <VideoPlayer src={channel.streamUrl} />
                    ) : (
                        <div className="flex h-full items-center justify-center text-zinc-500">
                            Stream unavailable
                        </div>
                    )}
                </div>
            </section>

            <section className="mx-auto w-full max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
                <div className="mb-6">
                    <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
                        All Channels
                    </h2>
                </div>
                <div className="hidden grid-cols-[180px_1fr_1fr] gap-6 px-5 pb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500 md:grid">
                    <div>Channel</div>
                    <div>Currently Watching</div>
                    <div>Up Next</div>
                </div>
                <div className="space-y-3">
                    {channels.map((channel) => {
                        const schedule = channel.tvgId ? schedules[channel.tvgId] : null;
                        const current = schedule?.currentProgram ?? null;
                        const next = schedule?.nextProgram ?? null;

                        return (
                            <div
                                key={channel.id}
                                className="grid grid-cols-1 gap-5 rounded-2xl border-zinc-800 bg-zinc-900/70 p-4 transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-900 md:grid-cols-[180px_1fr_1fr] md:items-center md:gap-6">
                                <Link
                                    href={`/channel/${channel.id}`}
                                    className="group flex items-center gap-4"
                                >
                                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white p-1.5 ring-1 ring-zinc-700 transition-transform duration-200 group-hover:scale-105 sm:h-16 sm:w-16">
                                        <Image
                                            src={channel.logo}
                                            alt={channel.name}
                                            width={80}
                                            height={80}
                                            className="h-full w-full rounded-full object-contain"
                                        />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="truncate text-sm font-semibold transition-colors group-hover:text-zinc-300">
                                            {channel.name}
                                        </p>
                                    </div>
                                </Link>

                                <div className="border-t border-zinc-800 pt-4 md:border-0 md:pt-0">
                                    {current ? (
                                        <div>
                                            <h3 className="truncate text-sm font-semibold sm:text-base">
                                                {current.title}
                                            </h3>
                                            <p className="mt-1 text-sm text-zinc-500 sm:text-sm">
                                                {formatTime(current.startTime)}{" "}-{" "}
                                                {formatTime(current.endTime)}
                                            </p>
                                        </div>

                                    ) : (
                                        <p className="text-sm text-zinc-500">
                                            No program available
                                        </p>
                                    )}
                                </div>
                                <div className="border-t border-zinc-800 pt-4 md:border-0 md:pt-0">
                                    {next ? (
                                        <div>
                                            <h3 className="truncate text-sm font-semibold sm:text-base">
                                                {next.title}
                                            </h3>
                                            <p className="mt-1 text-sm text-zinc-500 sm:text-sm">
                                                {formatTime(next?.startTime)}{" "}-{" "}
                                                {formatTime(next.endTime)}
                                            </p>
                                        </div>
                                    ) : (
                                        <p className="text-sm text-zinc-500">
                                            No upcoming program information available
                                        </p>
                                    )}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </main>
    )
}