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
    <div className="flex flex-col flex-1 items-center justify-center text-white bg-zinc-800 font-sans dark:bg-black">
      <main className="flex flex-1 flex-col py-4 items-center dark:bg-black">
        <h1 className="text-xl font-semibold">Watch live TV from top channels</h1>
        <ChannelCarousel
          selectedChanneld={selectedChannelId}
          onSelectedChannel={setSelectedChannelId}
        />
        <button className="mt-10 text-blue-400">See all channels</button>
      </main>
      <footer>
          <p>©{ new Date().getFullYear()} All rights reserved.</p>
        </footer>
    </div>
  );
}
