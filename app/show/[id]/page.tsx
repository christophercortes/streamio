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
        <main className="min-h-screen bg-zinc-950 px-6 py-2">
            <h1 className="mb-2 text-3xl font-bold">
                {show.name}
            </h1>
            <div className="mt-6 aspect-video rounded-xl bg-black">
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