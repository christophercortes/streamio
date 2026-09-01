"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { signOut } from "@/auth";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full border-b border-zinc-800 bg-zinc-950 text-white">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 md:px-8">
                <Link
                    href="/"
                    className="flex-shrink-0 items-center"
                    onClick={() => setIsOpen(false)}
                >
                    <Image
                        src="/logo.png"
                        alt="streamio+"
                        width={252}
                        height={100}
                        priority
                        className="h-auto w-28 sm:w-32 md:w-36 lg:w-40"
                    />
                </Link>
                {/* Desktop */}
                <div className="hidden items-center gap-1 md:flex lg:gap-2">
                    <Link
                        href="/home"
                        className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-300 transition hover-bg-zinc-900 hover:text-white lg:px-4">
                        Home
                    </Link>
                    <Link
                        href="/home"
                        className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-300 transition hover-bg-zinc-900 hover:text-white lg:px-4">
                        Live TV
                    </Link>
                    <Link
                        href="/home"
                        className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-300 transition hover-bg-zinc-900 hover:text-white lg:px-4">
                        Movies
                    </Link>
                    <Link
                        href="/home"
                        className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-300 transition hover-bg-zinc-900 hover:text-white lg:px-4">
                        Shows
                    </Link>
                </div>

                <div className="hidden md:flex md:items-center">
                    <Link
                        href="/login"
                        className="rounded-lg border border-zinc-700 px-3 py-1.5 text-sm font-semibold transition hover:border-zinc-500 hover:bg-zinc-900 sm:px-4 sm:py-2 sm:text-base"
                    >
                        <span className="">Log In</span>
                    </Link>
                </div>

                {/* Mobile Menu Button*/}
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex h-10 w-10 items-center justify-center rounded-lg text-zinc-300 transition hover:bg-zinc-900 hover:text-white md:hidden"
                    aria-label="Toggle navigation menu"
                    aria-expanded={isOpen}
                >
                    <div className="space-y-1.5">
                        <span
                            className={`block h-0.5 w-6 bg-current tansition ${
                                isOpen
                                ? "transition-y-2 rotate-45"
                                : ""
                            }`}
                        />
                        <span
                            className={`block h-0.5 w-6 bg-current tansition ${
                                isOpen
                                ? "-translate-y-2 -rotate-45"
                                : ""
                            }`}
                        />
                    </div>
                </button>
                {/* <div>
                    <form
                        action={async () => {
                            'use server';
                            await signOut({ redirectTo: '/' });
                        }}
                    />
                </div> */}
            </div>
            {/* Mobile */}
            <div
                className={`overflow-hidden border-t border-zinc-800 transition-all duration-300 md:hidden ${
                    isOpen
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                    }`}
            >
                <div className="space-y-1 px-4 py-4 sm:px-6">
                    <Link
                        href="/home"
                        onClick={() => setIsOpen(false)}
                        className="block rounded-lg px-4 py-3 text-sm font-medium text-zinc-300 transition hover:bg-zinc-900 hover:text-white"
                    >
                        Home
                    </Link>
                    <Link
                        href="/home"
                        onClick={() => setIsOpen(false)}
                        className="block rounded-lg px-4 py-3 text-sm font-medium text-zinc-300 transition hover:bg-zinc-900 hover:text-white"
                    >
                        Live TV
                    </Link>
                    <Link
                        href="/home"
                        onClick={() => setIsOpen(false)}
                        className="block rounded-lg px-4 py-3 text-sm font-medium text-zinc-300 transition hover:bg-zinc-900 hover:text-white"
                    >
                        Movies
                    </Link>
                    <Link
                        href="/home"
                        onClick={() => setIsOpen(false)}
                        className="block rounded-lg px-4 py-3 text-sm font-medium text-zinc-300 transition hover:bg-zinc-900 hover:text-white"
                    >
                        Shows
                    </Link>

                    <div className="border-t border-zinc-800 pt-3">
                        <Link
                            href="/login"
                            onClick={() => setIsOpen(false)}
                        className="block rounded-lg border border-zinc-700 px-4 py-3 text-center text-sm font-semibold transition hover:bg-zinc-900">
                            Log In
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}