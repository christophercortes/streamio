"use client";

import Image from "next/image";
import { channels } from "@/lib/channels";

type ChannelCarouselProps = {
    selectedChanneld: number;
    onSelectedChannel: (channelId: number) => void;
};

export default function ChannelCarousel({
    selectedChanneld, onSelectedChannel,
}: ChannelCarouselProps) {
    return (
        <section>
            <div className="mt-4 grid grid-cols-4 gap-2">
                {channels.map((channel) => {
                const isSelected = channel.id === selectedChanneld;

                return (
                    <Image
                        src={channel.logo}
                        alt="logo"
                        width={20}
                        height={20}
                        className="h-14 w-14 rounded-full object-contain border-yellow-400 bg-white"
                    />
                )
            })}</div>
        </section>
    )
}