import ChannelSection from "@/app/ui/ChannelSection";
import { channels } from "@/app/lib/channels";

export default function Page() {
    return (
        <main className="min-h-screen px-4 py-6 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl space-y-10">
                <section>
                    <ChannelSection
                        title="Local Channels"
                        channels={channels.filter(
                            (channel) => channel.country === "Chile"
                        )}
                    />
                </section>
                <div className="border-t border-zinc-800" />

                <section>
                    <ChannelSection
                        title="Kids"
                        channels={channels.filter(
                            (channel) => channel.category === "Kids" && channel.language === "Spanish"
                        )}
                    />
                </section>
                <div className="border-t border-zinc-800" />

                <section>
                    <ChannelSection
                        title="Latin America"
                        channels={channels.filter(
                            (channel) => channel.country != "Chile" && channel.language === "Spanish"
                        )}
                    />
                </section>
                <div className="border-t border-zinc-800" />

                <section>
                    <ChannelSection
                        title="International"
                        channels={channels.filter(
                            (channel) => channel.country != "Chile" && channel.language === "English"
                        )}
                    />
                </section>
                <div className="border-t border-zinc-800" />
            </div>
        </main>
    )
}