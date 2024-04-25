import { Suspense } from "react";
import { Metadata } from "next";
import fs from "fs";

import { Source_Serif_4 } from "next/font/google";

import ListArt from "../components/art-photo/list-art";

const sourceSerif = Source_Serif_4({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
    title: "Art & Photography",
    description: "Art & Photography by Alfazh",
};

const dir = "./public/art-photo/";
const files = fs.readdirSync(dir);
const content = files.map((file) => {
    return "/art-photo/" + file;
});

const getdate = content.map((file) => {
    const date = fs.statSync("./public" + file);
    console.log(date);
    return date.birthtime;
});

export default function Art() {
    const dates = getdate.map((date) => {
        const dates = date.toString().split(" ").slice(1, 4).join(" ");
        return dates;
    });
    return (
        <div className="flex flex-col space-y-8 px-8 pt-32">
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
            <Suspense
                fallback={
                    <div className="w-full h-screen border-dashed border-4 border-slate800 flex justify-center items-center text-6xl font-bold rounded-md">
                        Loading...
                    </div>
                }
            >
                <div>
                    <ListArt Props={{ art: content, date: dates }} />
                </div>
            </Suspense>
        </div>
    );
}
