"use client";

import ChannelSection from "@/app/ui/ChannelSection";
import { channels } from "@/app/lib/channels";
import { useState } from "react";

export default function Page() {
    const [channelSearch, sethannelSearch] = useState("");
    const [searchCountry, setSearchCountry] = useState("All");

    const filterChannels = channels.filter((channel) => {
        const matchesCountry =
            searchCountry === "All" || channel.country === searchCountry;
        const matchesName = channel.name.toLowerCase().includes(channelSearch.toLowerCase());

        return matchesCountry && matchesName;
    });

    const countries = [...new Set(channels.map((channel) => channel.country))]
        .filter(Boolean)
        .sort();

    return (
        <main className="min-h-screen px-4 py-6 sm:px-6 lg:px-8">
            <div className="mx-auto mb-8 max-w-7xl">
                <div className="rounded-2xl border border-white/10 bg-zinc-950/80 p-4 shadow-lg backdrop-blur-sm sm:-5">
                    <div className="mb-4">
                        <h2 className="text-lg font-semibold">
                            Find a channel
                        </h2>
                        <p className="mt-1 text-sm text-zinc-400">
                            Search by name or filter by country
                        </p>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row">
                        <div className="relative flex-1">
                            <input
                                type="text"
                                value={channelSearch}
                                onChange={(e) => sethannelSearch(e.target.value)}
                                placeholder="Search channels..."
                                className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2 outline-none placeholder:text-zinc-500 focus:border-yellow-500"
                            />
                        </div>
                        <div className="sm:w-52">
                            <select
                                value={searchCountry}
                                onChange={(e) => setSearchCountry(e.target.value)}
                                className="w-full cursor-pointer rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm outline-none transition focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                            >
                                <option value="All">
                                    All Countries
                                </option>

                                {countries.map((country) => (
                                    <option key={country} value={country}>
                                        {country}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-7xl space-y-8">
                <section>
                    <ChannelSection
                        title="All Channels"
                        channels={[...filterChannels].sort((a, b) => a.name.localeCompare(b.name))}
                    />
                </section>
                <div className="border-t border-zinc-800" />

                {/* <section>
                    <ChannelSection
                        title="Kids"
                        channels={channels.filter(
                            (channel) => channel.category === "Kids" && channel.language === "Spanish"
                        )}
                    />
                </section>
                <div className="border-t border-zinc-800" /> */}
            </div>
        </main>
    )
}