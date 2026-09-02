import { auth } from "@/auth";
import Navigation from "@/app/ui/Nav";

export default async function Navigate() {
    const session = await auth();

    return (
        <Navigation isLoggedIn={!!session?.user} />
    );
}