import Link from "next/link"
import Image from "next/image"

type ChannelCardProps = {
    id: number
    name: string
    description: string
    logo: string
}

export default function ChannelCard({
    id, name, description, logo,
}: ChannelCardProps) {
    return (
        <div className="overflow-hidden rounded-xl bg-zinc-900 transition duration-200 hover:scale-105 hover:bg-zinc-800">
            <div className="flex h-40 items-center justify-center bg-white p-6">
                <Image
                    src={logo}
                    alt={name}
                    width={120}
                    height={80}
                    className="h-auto max-h-24 w-auto object-contain"
                    
                />
            </div>

            <div className="p-5">
                <h3 className="text-lg font-semibold">{name}</h3>
                <p className="mt-1 text-sm text-zinc-400">{description}</p>
                <Link
                    href={`/channel/${id}`}
                    className="mt-5 block w-full rounded-lg bg-white px-4 py-3 text-center font-semibold text-black transition hover:bg-zinc-200"
                >
                    Watch Now
                </Link>
            </div>
        </div>
    )
}