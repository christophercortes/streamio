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
            setStatus("Stream loaded");
        });

        hls.on(Hls.Events.ERROR, (_, data) => {
            console.error("HLS error:", data);

            if (data.fatal) {
                setStatus(`Stream error: ${data.details}`);
            }
        });

        return () => {
            hls.destroy();
        };
    }, [src]);

    return (
        <div className="relative h-full w-full bg-black">
            <video
                ref={videoRef}
                controls
                autoPlay
                playsInline
                className="h-full w-full rounded-xl"
            />

            <div className="absolute bottom-16 left-4 rounded bg-black/70 px-3 py-2 text-sm text-white">
                {status}
            </div>
        </div>
    );
}