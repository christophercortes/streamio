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
        <section>
            <h2>
                {title}
            </h2>
            <div>
                {shows.map((show) => (
                    <ShowCard
                        id={show.id}
                        name={show.name}
                        logo={show.logo}
                    />
                ))}
            </div>
        </section>
    )
}