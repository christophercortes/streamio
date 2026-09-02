"use client";

import Image from "next/image";
import { channels } from "@/app/lib/channels";

type ChannelCarouselProps = {
    selectedChanneld: number;
    onSelectedChannel: (channelId: number) => void;
};

export default function ChannelCarousel({
    selectedChanneld,
    onSelectedChannel,
}: ChannelCarouselProps) {
    return (
        <section className="border border-white rounded-4xl px-2 py-2 mt-2 w-full min-w-0 overflow-hidden">
            <p className=" p-4 font-semibold sm:text-2xl">
                News plus Entertainment
            </p>
            <div className="flex w-full justify-center px-2 pb-4 sm:px-6 lg:px-8">
                <div className="grid grid-flow-col grid-rows-3 justify-center gap-2 sm:gap-10 sm:grid-rows-2">
                    {channels.map((channel) => {
                        const isSelected = channel.id === selectedChanneld;

                        return (
                            <button
                                key={channel.id}
                                type="button"
                                onClick={() =>
                                    onSelectedChannel(channel.id)
                                }
                                className="group flex w-16 shrink-0 flex-col items-center gap-2 sm:w-20 md:w-24"
                            >
                                <div className={`flex mt-8 h-14 w-14 items-center justify-center rounded-full bg-white p-1.5 transition-all duration-200 sm:h-16 sm:w-16 md:h-20 md:w-20
                                    ${isSelected
                                        ? "scale-105 ring-4 ring-yellow-200 ring-offset-2 ring-offset-zinc-950"
                                        : "ring-1 ring-zinc-700 group-hover:scale-105 group-hover:ring-zinc-400"
                                    }
                                    `}
                                >
                                    <Image
                                        key={channel.id}
                                        src={channel.logo}
                                        alt={channel.name}
                                        width={80}
                                        height={80}
                                        className="h-full w-full rounded-full object-contain"
                                    />
                                    </div>
                                    {/* Channel names */}
                                    <span className={`w-full truncate text-center text-[11px] font-medium sm:text-xs md:text-sm
                                ${isSelected
                                            ? "text-white"
                                            : "text-zinc-400 group-hover:text-white"
                                        }
                                    `}
                                    >
                                        {channel.name}
                                    </span>
                            </button>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}