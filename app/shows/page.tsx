import ShowSection from "../ui/ShowSection"
import { shows } from "../lib/shows"

export default function Shows() {
    return (
        <main className="">
                <section>
                    <ShowSection
                        title="Latin America"
                        shows={shows.filter(
                            (show) => show.country === "Latin America"
                        )}
                    />
                </section>
                <div className="border-t border-zinc-800" />
                {/* <section>
                    <ShowSection
                        title="International Shows"
                        shows={shows.filter(
                            (show) => show.language === "English"
                        )}
                    />
                </section>
                <div className="border-t border-zinc-800" /> */}
        </main>
    )
}