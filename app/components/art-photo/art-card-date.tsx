"use client";

import Image from "next/image";
import { useState } from "react";

type art = {
    image: string;
};

type date = {
    date: string;
};

export default function ArtCard({ art, date }: { art: art; date: date }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <div className="lg:w-56 lg:h-56 w-52 h-52 cursor-pointer" onClick={toggleModal}>
                <Image
                    src={art.image}
                    alt={art.image}
                    width={500}
                    height={500}
                    className="md:rounded-lg rounded-md object-cover object-center w-full h-full"
                />
            </div>

            {isOpen ? (
                <div
                    className="fixed top-0 left-0 bottom-0 right-0 w-full h-full bg-slate300 dark:bg-slate800 dark:bg-opacity-60 bg-opacity-60 backdrop-blur-2xl flex items-center justify-center"
                    onClick={toggleModal}
                >
                    <div className="relative flex flex-col w-96 bg-white md:px-4 md:py-8 px-4 py-6 space-y-2 mx-5">
                        <Image
                            src={art.image}
                            alt={art.image}
                            width={500}
                            height={500}
                            className="rounded-sm h-full"
                            onClick={(e) => e.stopPropagation()}
                        />
                        <p className="text-slate900 font-semibold md:text-base text-sm">
                            {date.date}
                        </p>
                    </div>
                </div>
            ) : null}
        </div>
    );
}
