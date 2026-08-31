import { signOut } from "@/auth";

export default function Navigation() {
    return (
        <div className="flex items-center px-4 py-5 sm:px-6 md:px-10 md:py-8 bg-zinc-950 text-white dark:bg-black">
            <div className="m-1">
                <p className="text-4xl font-bold">Streamio<span className="text-yellow-400">+</span></p>
                <p className="text-zinc-400">Watch live TV anywhere</p>
            </div>
            <div className="ml-auto mb-auto border-2 border-solid px-2 py-1 font-semibold">
                <button>Log In</button>
            </div>
            <div>
                <form
                    action={async () => {
                        'use server';
                        await signOut({ redirectTo: '/' });
                    }}
                />
            </div>
        </div>
    )
}