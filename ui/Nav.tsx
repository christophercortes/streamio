"use client";

import Image from "next/image";

export default function Nav() {
    return (
        <div className="flex px-10 py-10 bg-zinc-950 text-white dark:bg-black">
            <div>
                <Image
                    src="/logo.png"
                    width={100}
                    height={80}
                    className="ml-15"
                    alt="Logo"
                />
                <p className="mt-2 ml-5 text-zinc-400">Watch live TV anywhere</p>
            </div>
            <div className="mt-5 text-4xl font-bold">
                <p>Streamio</p>
            </div>
            <div className="mt-5 text-4xl font-bold text-yellow-400">
                <p>+</p>
            </div>
        </div>
    )
}

