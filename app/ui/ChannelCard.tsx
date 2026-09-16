import Link from "next/link"
import Image from "next/image"

type ChannelCardProps = {
    id: number
    name: string
    logo: string
}

export default function ChannelCard({
    id, name, logo,
}: ChannelCardProps) {
    return (
        <div className="group overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900 transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400 hover:bg-yellow-500 hover:text-black">
            <div className="px-4 py-3">
                <Link
                    href={`/channel/${id}`}
                >
                    <div className="flex rounded-2xl h-32 items-center justify-center bg-white p-6 transition duration-300 group-hover:bg-white">
                        <Image
                            src={logo}
                            alt={name}
                            width={120}
                            height={80}
                            className="h-auto max-h-20 w-auto max-w-[140px] object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>
                    <h3 className="mt-1 truncate text-sm font-semibold">
                        {name}
                    </h3>
                </Link>
            </div>
        </div>
    )
}