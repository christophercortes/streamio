import ChannelSection from "@/components/ChannelSection";
import { channels } from "@/lib/channels";

const liveChannels = channels.filter((channel) => channel.id < 10);
const newsChannels = channels.filter((channel) => channel.id >= 10);

export default function Page() {
    return (
        <main className="min-h-screen bg-zinc-950 px-6 text-white">
            <header className="mb-12">
                <h1 className="text-4xl font-bold tracking-tight mt-10">Streamio</h1>
                <p className="mt-2 text-zinc-400">Watch live TV anywhere</p>
            </header>

            <ChannelSection
                title="Live Channels"
                channels={liveChannels}
            />

            <ChannelSection
                title="News"
                channels={newsChannels}
            />
        </main>
    )
}