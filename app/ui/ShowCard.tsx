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
        <div>
            <div>
                <Image
                    src={logo}
                    alt={name}
                    width={100}
                    height={100}
                    className=""
                />
            </div>
            <div>
                <h3>
                    {name}
                </h3>
                <Link
                    href={`/show/${id}`}
                    className=""
                >
                    Watch Now
                </Link>
            </div>
        </div>
    )
}