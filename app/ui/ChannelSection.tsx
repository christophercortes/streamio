import ChannelCard from "./ChannelCard";
import type { Channel } from "@/app/lib/channels";

type ChannelSectionProps = {
    title: string
    channels: Channel[]
}

export default function ChannelSection({
    title,
    channels,
}: ChannelSectionProps) {
    return (
        <section className="mb-12">
            <h2 className="mb-6 text-2xl font-semibold">{title}</h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {channels.map((channel) => (
                    <ChannelCard
                        key={channel.id}
                        id={channel.id}
                        name={channel.name}
                        description={channel.description}
                        logo={channel.logo}
                    />
                ))}
            </div>
        </section>
    );
}