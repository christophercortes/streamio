"use client";

import Image from "next/image";

export default function Navigation() {
    return (
        <div className="flex items-center px-4 py-5 sm:px-6 md:px-10 md:py-8 bg-zinc-950 text-white dark:bg-black">
            <div>
                {/* <Image
                    src="/logo.png"
                    width={70}
                    height={56}
                    className="ml-15"
                    alt="Logo"
                /> */}
            </div>
            <div className="m-1">
                <p className="text-4xl font-bold">Streamio<span className="text-yellow-400">+</span></p>
                <p className="text-zinc-400">Watch live TV anywhere</p>
            </div>
            <div className="ml-auto border-2 border-solid px-2 font-semibold">
                <button>Log In</button>
            </div>
        </div>
    )
}

