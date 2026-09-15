import { notFound } from "next/navigation";
import { shows } from "@/app/lib/shows";
import VideoPlayer from "@/app/ui/VideoPlayer";

type Props = {
    params: Promise<{
        id: string;
    }>;
};

export default async function ShowsPage({ params }: Props) {
    const { id } = await params;

    const show = shows.find(
        (show) => show.id === Number(id)
    );

    if (!show) {
        notFound();
    }

    return (
        <main>
            <h1>
                {show.name}
            </h1>
            <div>
                {show.streamUrl ? (
                    <VideoPlayer src={show.streamUrl} />
                ) : (
                        <div>
                            Stream unavailable
                        </div>
                )}
            </div>
        </main>
    )
}