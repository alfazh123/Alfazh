import { useState } from "react";

import Image from "next/image";
import { Source_Serif_4 } from "next/font/google";

const sourceSerif = Source_Serif_4({ subsets: ["latin"], weight: ["400"] });

interface BookProps {
    title: string;
    src: string;
    year: number;
    authors: string[];
}

export default function Book({ title, src, year, authors }: BookProps) {
    const [isOpen, setIsOpen] = useState(false);

    const TogleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button
                type="button"
                className="group dark:bg-slate700 bg-sand200 shadow-lg rounded-md h-80 w-full"
                onClick={TogleModal}
            >
                <div className="my-5 flex flex-col justify-center items-center space-y-4">
                    <Image
                        src={src}
                        alt={title}
                        width={500}
                        height={500}
                        className={`mx-auto rounded-md w-32 group-hover:skew-x-6 group-hover:-skew-y-6 transition-transform duration-300 ease-in-out`}
                    />
                    <p className={`text-lg ${sourceSerif.className}`}>
                        {title},{year}
                    </p>
                </div>
            </button>

            {isOpen ? (
                <div
                    className="h-screen w-screen flex items-center z-0 fixed justify-center top-0 right-0 bottom-0 left-0 bg-slate800 bg-opacity-60 backdrop-blur-md text-slate800"
                    onClick={TogleModal}
                >
                    <div className="bg-white px-2 py-4">
                        <Image
                            src={src}
                            alt={title}
                            width={500}
                            height={500}
                            className="md:w-80 w-44 aspect-auto rounded-sm dark:bg-slate700 h-full"
                            onClick={(e) => e.stopPropagation()}
                        />
                        <p className="text-slate900 font-semibold text-sm">
                            {title},<span className="tabular-nums">{year}</span>
                        </p>
                        <h3 className="text-lg font-bold">
                            Karya {authors.map((author) => author)}
                        </h3>
                    </div>
                </div>
            ) : null}
        </div>
    );
}
