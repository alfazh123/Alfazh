import { Metadata } from "next";
import { art } from "../lib/lib";

import { Source_Serif_4 } from "next/font/google";

import ListArt from "../components/art-photo/list-art";

const sourceSerif = Source_Serif_4({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
    title: "Art & Photography",
    description: "Art & Photography by Alfazh",
};


export default function Art() {
    return (
        <div className="flex flex-col space-y-8 md:px-8 px-4 pt-32">
            <header className="space-y-10">
                <h1 className="text-4xl font-bold">Art & Photography</h1>
                <p
                    className={`${sourceSerif.className} text-ellipsis text-2xl`}
                >
                    This Page contains all the Art & Photography by{" "}
                    <span className="hover:underline cursor-default">Me</span>,
                    so Welcome and Enjoy!
                </p>
            </header>
            <div>
                <ListArt Props={art} />
            </div>
        </div>
    );
}
