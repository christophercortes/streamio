"use client";

import ChannelCarousel from "@/app/ui/ChannelCarousel";
import Cinematic from "./ui/Cinematic";
import { channels } from "./lib/channels";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="w-full flex-1">

        <Cinematic
          video="/channels/pampa.mp4"
          category="Teleserie"
          title="Pampa Ilusion"
          description="from the 90's"
        />
        <div className="mx-auto w-full max-w-7xl flex-col">
          <div className="mb-8 text-center">
            <h1 className="text-3xl px-2 font-bold tracking-tight sm:text-4xl mt-8 md:text-5xl">
              Watch live TV from top channels
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-zinc-400 sm:base-2xl sm:mt-6 md:text-lg">
              Choose a channel and start watching live
            </p>
          </div>

          <ChannelCarousel
            title="News + Entertainment"
            channels={channels.filter(
              (channel) => channel.category === "Entertainment").slice(0, 9)}
          />
          
          <div className="my-6 flex justify-center sm:mt-8">
            <button
              type="button"
              className="group inline-flex items-center gap-2 rounded-lg px-3 py-4 text-sm font-semibold text-zinc-300 transition hover:bg-white/5 hover:text-white sm:text-base">
              See all channels
              <span className="text-yellow-400 transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </button>
          </div>
        </div>
      </main>
      <footer className="border-t border-white/40 px-4 py-5 text-center text-xs text-zinc-500 sm:py-6 sm:text-sm">
        <p>©{new Date().getFullYear()} <span className="text-white">Streamio+</span>. All rights reserved.</p>
      </footer>
    </div>
  );
}
