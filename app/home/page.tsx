import ChannelSection from "@/app/ui/ChannelSection";
import { channels } from "@/app/lib/channels";

export default function Page() {
    return (
        <main className="min-h-screen pt-4 px-6">

            <ChannelSection
                title="Local Channels"
                channels={channels.filter(
                    (channel) => channel.country === "Chile"
                )}
            />

            <ChannelSection
                title="News"
                channels={channels.filter(
                    (channel) => channel.category === "News"
                )}
            />

            <ChannelSection
                title="International"
                channels={channels.filter(
                    (channel) => channel.country != "Chile"
                )}
            />
        </main>
    )
}