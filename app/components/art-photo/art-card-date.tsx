"use client";

import Image from "next/image";
import { useState } from "react";
import type { Art } from "@/app/lib/utils";

export default function ArtCard({ image, device, date }: Art) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <div className=" w-full h-full aspect-square cursor-pointer" onClick={toggleModal}>
                <Image
                    src={image}
                    alt={image}
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
                    <div className="relative flex flex-col w-96 bg-white md:px-4 md:py-8 px-4 py-6 space-y-2 mx-5" onClick={(e) => e.stopPropagation()}>
                        <Image
                            src={image}
                            alt={image}
                            width={500}
                            height={500}
                            className="rounded-sm h-full"
                        />
                        <div className="justify-center text-center">
                            <p className="flex justify-center items-center text-lg text-slate900 md:text-sm gap-2">
                                Shot on <span className="font-bold text-xl">{device}</span>
                            </p>
                            <p className="text-slate900 font-semibold text-xs">
                                {date}
                            </p>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
}
