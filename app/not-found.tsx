import Link from "next/link";

import { Roboto_Condensed } from "next/font/google";

const Roboto_Condensed_400 = Roboto_Condensed({
    subsets: ["latin"],
    weight: "400",
});

export default function NotFound() {
    return (
        <div
            className={`flex flex-col justify-center items-center h-screen ${Roboto_Condensed_400.className}`}
        >
            <h1 className="font-bold text-4xl">404</h1>
            <h2>Not Found</h2>
            <div className="inline-flex gap-2">
                <p>Could not find requested resource </p>
                <Link href="/" className="underline underline-offset-2">
                    Return Home
                </Link>
            </div>
        </div>
    );
}
