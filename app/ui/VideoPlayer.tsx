"use client";

import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";

type VideoPlayerProps = {
    src: string;
};

type Quality = {
    index: number;
    height: number;
    width: number;
    bitrate: number;
};

export default function VideoPlayer({ src }: VideoPlayerProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const hlsRef = useRef<Hls | null>(null);

    const [status, setStatus] = useState("Loading stream...");
    const [qualities, setQualities] = useState<Quality[]>([]);
    const [currentQuality, setCurrentquality] = useState<number>(-1);

    const [showstatus, setShowStatus] = useState(true);

    useEffect(() => {
        const video = videoRef.current;

        if (!video) return;

        // Destroy previous HLS instance when changing channels
        if (hlsRef.current) {
            hlsRef.current.destroy();
            hlsRef.current = null;
        }

        setQualities([]);
        setCurrentquality(-1);
        setStatus("Loading stream...");

        if (!Hls.isSupported()) {
            setStatus("HLS is not supported in this browser");
            return;
        }

        console.log("Using hls.js");

        const hls = new Hls({
            enableWorker: true,
            startLevel: -1,
            capLevelToPlayerSize: false,
        });

        hlsRef.current = hls;

        hls.loadSource(src);
        hls.attachMedia(video);

        hls.on(Hls.Events.MANIFEST_PARSED, (_, data) => {
            console.log("HLS manifest loaded");

            const availableQualities: Quality[] = data.levels
                .map((level, index) => ({
                    index,
                    height: level.height,
                    width: level.width,
                    bitrate: level.bitrate,
                }))
                .filter((quality) => quality.height > 0)
                .sort((a, b) => b.height - a.height);

            console.log("Available qualities:", availableQualities);

            setQualities(availableQualities);
            setStatus("🔴 Live");
        });

        hls.on(Hls.Events.LEVEL_SWITCHED, (_, data) => {
            console.log("Quality switched to level:", data.level);
        });

        hls.on(Hls.Events.ERROR, (_, data) => {
            console.error("HLS error:", data);

            if (data.fatal) {
                setStatus(`❌ Not available: ${data.details}`);
            }
        });

        return () => {
            hls.destroy();
            hlsRef.current = null;
        };
    }, [src]);

    useEffect(() => {
        setShowStatus(true);

        const timer = setTimeout(() => {
            setShowStatus(false)
        }, 2500);

        return () => clearTimeout(timer);
    }, [status]);

    const changeQuality = (levelIndex: number) => {
        const hls = hlsRef.current;

        if (!hls) return;

        if (levelIndex === -1) {
            // Auto quality
            hls.currentLevel = -1;
            setCurrentquality(-1);

            console.log("Quality: Auto");
        } else {
            // Manual quality
            hls.currentLevel = levelIndex;
            setCurrentquality(levelIndex);

            console.log(`Quality: ${hls.levels[levelIndex]?.height}p`);
        }
    };

    return (
        <section className="w-full px-2 sm:px-4 md:px-6">
            <div className="mx-auto w-full max-w-6xl overflow-hidden rounded-lg sm:rounded-xl">
                <div className="relative aspect-video w-full bg-black">
                    <video
                        ref={videoRef}
                        controls
                        autoPlay
                        playsInline
                        className="h-full w-full object-contain"
                    />

                    <div className={`absolute bottom-16 left-4 rounded bg-black/70 px-3 py-2 text-xs text-white backdrop-blur-sm tranistion-opacity duration-500 md:text-sm
                        ${showstatus
                            ? "opacity-100"
                            : "pointer-events-none opacity-0"
                        }`}
                    >
                        {status}
                    </div>

                    {/* Quality selector */}
                    {qualities.length > 0 && (
                        <div className={`absolute bottom-16 right-4 transition-opacity duration-500
                        ${showstatus
                                ? "opacity-100"
                                : "pointer-events-none opacity-0"
                            }`}
                        >
                            <select value={currentQuality}
                                onChange={(e) =>
                                    changeQuality(Number(e.target.value))}
                                className="cursor-pointer rounded bg-black/80 px-3 py-2 text-xs font-medium text-white outline-none backdrop-blur-sm hover:bg-black md:text-sm"
                                aria-label="Video quality" >
                                <option value={-1}>
                                    Auto
                                </option>
                                {qualities.map((quality) =>
                                (<option
                                    key={quality.index}
                                    value={quality.index} >
                                    {quality.height}p
                                </option>))}
                            </select>
                        </div>)}
                </div>
            </div>
        </section>
    );
}