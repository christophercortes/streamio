import Link from "next/link";
import Image from "next/image";

type ShowCardProps = {
    id: number;
    name: string;
    logo: string;
}

export default function ShowCard({
    id, name, logo,
}: ShowCardProps) {
    return (
        <div className="group overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-950 transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-700 hover:bg-zinc-900">
            <div className="flex h-32 items-center justify-center bg-zinc-100 p-6 transition duration-300 group-hover:bg-white">
                <Image
                    src={logo}
                    alt={name}
                    width={120}
                    height={80}
                    className="h-auto max-h-28 w-auto max-w-[140px] object-contain transition-transform duration-300 group-hover:scale-105"
                />
            </div>
            <div className="px-4 py-6">
                <h3 className="truncate text-sm font-semibold">
                    {name}
                </h3>
                <Link
                    href={`/show/${id}`}
                    className="mt-5 block w-full rounded-lg bg-white px-4 py-3 text-center font-semibold text-black transition hover:bg-zinc-200"
                >
                    Watch Now
                </Link>
            </div>
        </div>
    )
}