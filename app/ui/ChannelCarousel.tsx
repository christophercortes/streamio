"use client";

import Image from "next/image";
import type { Channel } from "@/app/lib/channels";

type ChannelCarouselProps = {
    title: string;
    channels: Channel[];
};

export default function ChannelCarousel({
    title, channels,
}: ChannelCarouselProps) {
    return (
        <section className="mx-4 mt-8 w-auto min-w-0 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-950 via-zinc-900 to-red-950 px-3 py-4 shadow-lg sm:mx-40 sm:pb-20 lg:mx-8">
            <p className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl sm:pt-4">
                {title}
            </p>
            <div className="flex w-full justify-center px-2 pb-4 sm:px-6 lg:px-8">
                <div className="grid grid-flow-col grid-rows-3 justify-center gap-3 sm:gap-10">
                    {channels.map((channel) => {
                        return (
                            <div
                                key={channel.id}
                                className="group flex w-16 shrink-0 flex-col items-center gap-2 sm:w-20 md:w-24">
                                <div className="flex mt-8 h-14 w-14 items-center justify-center rounded-full bg-white p-1.5 transition-all duration-200 sm:h-16 sm:w-16 md:h-20 md:w-20">
                                    <Image
                                        src={channel.logo}
                                        alt={channel.name}
                                        width={80}
                                        height={80}
                                        className="h-full w-full rounded-full object-contain"
                                    />
                                </div>
                                {/* Channel names */}
                                <span className="w-full truncate text-center text-[11px] font-medium text-zinc-300 transition-colors group-hover:text-white sm:text-xs md:text-sm">
                                    {channel.name}
                                </span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}