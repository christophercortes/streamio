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
        <section className="mx-auto w-full max-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="m-6 text-2xl font-bold tracking-tight sm:text-3xl">
                {title}
            </h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 lg:gap-10">
                {channels.map((channel) => (
                    <ChannelCard
                        key={channel.id}
                        id={channel.id}
                        name={channel.name}
                        logo={channel.logo}
                    />
                ))}
            </div>
        </section>
    );
}