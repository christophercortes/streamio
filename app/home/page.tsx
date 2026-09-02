import ChannelSection from "@/app/ui/ChannelSection";
import { channels } from "@/app/lib/channels";

const liveChannels = channels.filter((channel) => channel.id < 10);
const newsChannels = channels.filter((channel) => channel.id >= 10);

export default function Page() {
    return (
        <main className="min-h-screen pt-4 bg-zinc-950 px-6 text-white">

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