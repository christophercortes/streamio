"use client";

import { useState } from "react";
import { channels } from "@/app/lib/channels";
import ChannelCarousel from "@/app/ui/ChannelCarousel";

export default function Home() {
  const [selectedChannelId, setSelectedChannelId] = useState(channels[0].id);

  const selectedChannel = channels.find(
    (channel) => channel.id === selectedChannelId
  )!;

  return (
    <div className="flex min-h-screen w-full flex-col bg-zinc-900 text-white dark:bg-black">
      <main className="w-full flex-1">
        <div className="mx-auto flex w-full max-w-7xl flex-col px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
          <div className="mb-6">
            <h1 className="text-center text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl lg:text-4xl">
              Watch live TV from top channels
            </h1>
            <p className="mt-2 text-center text-sm font-semibold tracking-tight sm:text-2xl md:text-3xl lg:text-4xl">
              Choose a channel and start watching live.
            </p>
          </div>
          <ChannelCarousel
          selectedChanneld={selectedChannelId}
          onSelectedChannel={setSelectedChannelId}
          />
          <div className="mt-6 flex justify-center sm:mt-8">
            <button
              type="button"
              className="rounded-lg px-4 py-2 text-sm font-medium text-blue-400 transition hover:bg-zinc-800 hover:text-blue-300 sm:text-base">
              See all channels
            </button>
          </div>
        </div>
      </main>
      <footer className="border-t border-zinc-800 px-4 py-5 text-center text-xs text-zinc-500 sm:py-6 sm:text-sm">
          <p>©{ new Date().getFullYear()} Streamio+. All rights reserved.</p>
        </footer>
    </div>
  );
}
