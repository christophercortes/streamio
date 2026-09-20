"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { logOut } from "../lib/actions";

type NavigationProp = {
    isLoggedIn: boolean;
};

export default function Navigation({
    isLoggedIn,
}: NavigationProp) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-white/40 bg-zinc-950 text-white backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 md:px-8">
                <Link
                    href="/"
                    className="flex shrink-0 items-center"
                    onClick={() => setIsOpen(false)}
                >
                    <Image
                        src="/logo/logo.png"
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
                        className="group relative rounded-lg px-3 py-2 text-sm font-medium text-zinc-300 transition hover:text-white lg:px">
                        Home
                        <span className="absolute inset-x-3 -bottom-0.5 h-0.5 origen-left scale-x-0 rounded-full bg-yellow-400 transition-transform duration-200 group-hover:scale-x-100" />
                    </Link>
                    <Link
                        href="/live"
                        className="group relative rounded-lg px-3 py-2 text-sm font-medium text-zinc-300 transition hover:text-white lg:px">
                        Live TV
                    </Link>
                    <Link
                        href="/movies"
                        className="group relative rounded-lg px-3 py-2 text-sm font-medium text-zinc-300 transition hover:text-white lg:px">
                        Movies
                    </Link>
                    <Link
                        href="/shows"
                        className="group relative rounded-lg px-3 py-2 text-sm font-medium text-zinc-300 transition hover:text-white lg:px">
                        Shows
                    </Link>
                </div>
                <div className="hidden md:block">
                    {isLoggedIn ? (
                        <form action={logOut}>
                            <button
                                type="submit"
                                className="rounded-lg bg-yellow-400 text-black px-3 py-1.5 text-sm font-semibold transition hover:bg-yellow-300 sm:px-4 sm:py-2 sm:text-base"
                            >
                                Sign Out
                            </button>
                        </form>
                    ) : (
                        <Link
                            href="/login"
                            className="rounded-lg bg-yellow-400 text-black px-3 py-1.5 text-sm font-semibold transition hover:bg-yellow-300 sm:px-4 sm:py-2 sm:text-base"
                        >
                            Log In
                        </Link>
                    )}
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
                            className={`block h-0.5 w-6 bg-current transition ${isOpen
                                ? "translate-y-2 rotate-45"
                                : ""
                                }`}
                        />
                        <span
                            className={`block h-0.5 w-6 bg-current transition ${isOpen
                                ? "-translate-y-2 -rotate-45"
                                : ""
                                }`}
                        />
                    </div>
                </button>
            </div>

            {/* Mobile menu*/}
            <div
                className={`overflow-hidden border-t border-zinc-800 transition-all duration-300 md:hidden ${isOpen
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
                        href="/live"
                        onClick={() => setIsOpen(false)}
                        className="block rounded-lg px-4 py-3 text-sm font-medium text-zinc-300 transition hover:bg-zinc-900 hover:text-white"
                    >
                        Live TV
                    </Link>
                    <Link
                        href="/movies"
                        onClick={() => setIsOpen(false)}
                        className="block rounded-lg px-4 py-3 text-sm font-medium text-zinc-300 transition hover:bg-zinc-900 hover:text-white"
                    >
                        Movies
                    </Link>
                    <Link
                        href="/shows"
                        onClick={() => setIsOpen(false)}
                        className="block rounded-lg px-4 py-3 text-sm font-medium text-zinc-300 transition hover:bg-zinc-900 hover:text-white"
                    >
                        Shows
                    </Link>

                    <div className="border-t border-zinc-800 pt-4 transition-all duration-300 md:hidden">
                        {isLoggedIn ? (
                            <form action={logOut}>
                                <button
                                    type="submit"
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full rounded-lg border border-zinc-700 px-4 py-3 text-black text-center text-sm font-semibold bg-yellow-400 transition hover:bg-yellow-300"
                                >
                                    Sign Out
                                </button>
                            </form>
                        ) : (
                            <Link
                                href="/login"
                                onClick={() => setIsOpen(false)}
                                className="block rounded-lg border border-zinc-700 px-4 py-3 text-black text-center text-sm font-semibold bg-yellow-400 transition hover:bg-yellow-300">
                                Log In
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}