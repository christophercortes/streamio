import { notFound } from "next/navigation";
import { channels } from "@/app/lib/channels";
import VideoPlayer from "@/app/ui/VideoPlayer";
import { getChannelSchedules } from "@/app/lib/epg";

type Props = {
    params: Promise<{
        id: string;
    }>;
};

function formatTime(date: Date) {
    return new Intl.DateTimeFormat("en-us", {
        hour: "numeric",
        minute: "2-digit",
    }).format(date);
}

export default async function ChannelPage({ params }: Props) {
    const { id } = await params;

    const channel = channels.find(
        (channel) => channel.id === Number(id)
    );

    if (!channel) {
        notFound();
    }

    const schedule = channel.tvgId
        ? (await getChannelSchedules([channel.tvgId]))[channel.tvgId]
        : null;

    const current = schedule?.currentProgram ?? null;
    const next = schedule?.nextProgram ?? null;

    return (
        <main className="min-h-screen bg-zinc-950 px-6 py-2">
            <section>
                <h1 className="mb-2 text-3xl font-bold">{channel.name}</h1>
                <p className="text-zinc-400">{channel.country}</p>
                <div className="mt-6 aspect-video rounded-xl bg-black">
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
                <div className="hidden grid-cols-[180px_1fr_1fr] gap-6 pb-3 text-sm font-semibold uppercase tracking-wider text-zinc-500 sm:grid">
                    <div>Channel</div>
                    <div>Currently Watching</div>
                    <div>Up Next</div>
                </div>
                <div className="space-y-3">
                    <div
                        key={channel.id}
                        className="grid grid-cols-1 gap-5 rounded-2xl border-zinc-800 bg-zinc-900/70 p-4 transition-all duration-200 hover-border-zinc-700 hover:bg-zinc-900 md:grid-cols-[180px_1fr_1fr] md:items-center md:gap-6"
                    >
                        <div className="min-w-0">
                            <p className="truncate text-sm font-semibold transition-colors group-hover:text-zinc-300">
                                {channel.name}
                            </p>
                        </div>
                        <div className="border-t border-zinc-800 pt-4 md:border-0 md:pt-0">
                            {current ? (
                                <div>
                                    <h3>
                                        {current.title}
                                    </h3>
                                    <p className="mt-1 text-sm text-zinc-500 sm:text-sm">
                                        {formatTime(current.startTime)}{" "}-{" "}
                                        {formatTime(current.endTime)}
                                    </p>
                                </div>
                            ) : (

                                <p>
                                    No program available
                                </p>
                            )}
                        </div>
                        <div className="border-t border-zinc-800 pt-4 md:border-0 md:pt-0">
                            {next ? (
                                <div>
                                    <h3>
                                        {next.title}
                                    </h3>
                                    <p className="mt-1 text-sm text-zinc-500 sm:text-sm">
                                        {formatTime(next?.startTime)}{" "}-{" "}
                                        {formatTime(next.endTime)}
                                    </p>
                                </div>
                            ) : (
                                <p>
                                    No upcomimg progam information available
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}