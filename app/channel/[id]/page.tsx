import { notFound } from "next/navigation";
import { channels } from "@/app/lib/channels";
import VideoPlayer from "@/app/ui/VideoPlayer";

type Props = {
    params: Promise<{
        id: string;
    }>;
};

export default async function ChannelPage({ params }: Props) {
    const { id } = await params;

    const channel = channels.find(
        (channel) => channel.id === Number(id)
    );

    if (!channel) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-zinc-950 px-6 py-2 text-white">
            <h1 className="mb-2 text-3xl font-bold">{channel.name}</h1>
            <p className="text-zinc-400">{channel.description}</p>
            <div className="mt-6 aspect-video rounded-xl bg-black">
                {channel.streamUrl ? (
                    <VideoPlayer src={channel.streamUrl} />
                ) : (
                    <div className="flex h-full items-center justify-center text-zinc-500">
                        Stream unavailable
                    </div>
                )}
            </div>
        </main>
    )
}