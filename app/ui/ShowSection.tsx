import ShowCard from "./ShowCard";
import type { Shows } from "../lib/shows";

type ShowSectionProps = {
    title: string;
    shows: Shows[]
}

export default function ShowSection({
    title, shows
}: ShowSectionProps) {
    return (
        <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="m-6 text-2xl font-bold tracking-tight sm:text-3xl">
                {title}
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 lg:gap-10">
                {shows.map((show) => (
                    <ShowCard
                        key={show.id}
                        id={show.id}
                        name={show.name}
                        logo={show.logo}
                    />
                ))}
            </div>
        </section>
    )
}