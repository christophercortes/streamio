"use client";

import Image from "next/image";

export default function Nav() {
    return (
        <div className="flex bg-zinc-950 text-white dark:bg-black">
            <div>
                <Image
                    src="/logo.png"
                    width={300}
                    height={80}
                    className=""
                    alt="Logo"
                />
                <p className="mt-2 text-zinc-400">Watch live TV anywhere</p>
            </div>
            <div className="">Hello</div>
            <div className="">Menu</div>
        </div>
    )
}

