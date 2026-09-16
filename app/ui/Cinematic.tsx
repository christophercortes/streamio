"use client";

import Link from "next/link";

type CinematicProps = {
    video: string;
    category: string;
    title: string;
    description: string;
};

export default function Cinematic({
    video, category, title, description,
}: CinematicProps) {
    return (
        <section className="relative h-[250px] w-auto mb-6 md:h-[650px]">
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
            >
                <source src={video} type="video/mp4"></source>
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
            <div className="absolute inset-0 bottom-0 h-32 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="relative z-10 mb-10 flex h-full items-center px-6 sm:px-10 md:px-14">
                <div className="max-w-xl md:mt-20">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-yellow-400">
                        {category}
                    </p>
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                        {title}
                    </h1>
                    <p className="mt-4 max-w-lg text-sm leading-6 text-zinc-300 sm:text-base">
                        {description}
                    </p>
                    <div className="mt-6 flex gap-3">
                        <Link
                            href={`/channel/${25}`}
                            className="rounded-lg bg-yellow-400 px-6 py-3 text-sm text-black transition hover:bg-yellow-300"
                        >
                            Watch Now
                        </Link>
                        <button
                            type="button"
                            className="rounded-lg border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold backdrop-blur-sm transition hover:bg-white/20"
                        >
                            More Info
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}