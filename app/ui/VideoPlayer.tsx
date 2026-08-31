"use client";

import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";

type VideoPlayerProps = {
    src: string;
};

export default function VideoPlayer({ src }: VideoPlayerProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [status, setStatus] = useState("Loading stream...");

    useEffect(() => {
        const video = videoRef.current;

        if (!video) return;

        if (!Hls.isSupported()) {
            setStatus("HLS is not supported in this browser");
            return;
        }

        console.log("Using hls.js");

        const hls = new Hls({
            
            enableWorker: true,
        });

        hls.loadSource(src);
        hls.attachMedia(video);

        hls.on(Hls.Events.MANIFEST_PARSED, () => {
            console.log("HLS manifest loaded");
            setStatus("🔴 Live");
        });

        hls.on(Hls.Events.ERROR, (_, data) => {
            console.error("HLS error:", data);

            if (data.fatal) {
                setStatus(`❌ Not available: ${data.details}`);
            }
        });

        return () => {
            hls.destroy();
        };
    }, [src]);

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

                    <div className="absolute bottom-16 left-4 rounded bg-black/70 px-3 py-2 text-xs text-white backdrop-blur-sm md:text-sm">
                        {status}
                    </div>
                </div>
            </div>
        </section>
    );
}