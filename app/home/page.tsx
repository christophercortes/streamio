import ChannelSection from "@/app/ui/ChannelSection";
import { channels } from "@/app/lib/channels";

const newsChannels = channels.filter((channel) => channel.country === "Chile" && channel.category === "News");
const internationalChannels = channels.filter((channel) => channel.country != "Chile");

export default function Page() {
    return (
        <main className="min-h-screen pt-4 px-6 ">

            <ChannelSection
                title="Live Channels"
                channels={channels.filter(
                    (channel) => channel.country === "Chile" && channel.category === "Entertainment"
                )}
            />

            <ChannelSection
                title="News"
                channels={newsChannels}
            />

            <ChannelSection
                title="International"
                channels={internationalChannels}
            />
        </main>
    )
}