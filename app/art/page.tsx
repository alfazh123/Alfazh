import Image from "next/image";
import { Metadata } from "next";

import fs from "fs";

export const metadata: Metadata = {
    title: "Art & Photography",
    description: "Art & Photography by Alfazh",
};

const dir = "./public/art-photo";
const files = fs.readdirSync(dir);
const content = files.map((file) => {
    return "/art-photo/" + file;
});

export default function Art() {
    return (
        <div className="flex flex-col space-y-20 px-4 pt-32">
            <header>
                <h1 className="text-4xl font-bold">Art & Photography</h1>
                <p>This page is for my recent art, hope you enjoy it!</p>
            </header>

            <div className="md:columns-3 mx-auto justify-center columns-2 md:gap-4 md:space-y-4 gap-3 space-y-3">
                {content.map((art, id) => (
                    <Image
                        key={id}
                        src={art}
                        alt={art}
                        width={500}
                        height={500}
                        className="w-60 h-full aspect-auto rounded-lg break-inside-avoid hover:scale-105 transition ease-in-out duration-500"
                    />
                ))}
            </div>
        </div>
    );
}
