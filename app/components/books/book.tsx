import { useState } from "react";

import Image from "next/image";

interface BookProps {
    title: string;
    src: string;
    year: number;
}

export default function Book({ title, src, year }: BookProps) {
    const [isOpen, setIsOpen] = useState(false);

    const TogleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button
                type="button"
                className="dark:bg-slate600 bg-sand shadow-lg rounded-md md:h-80 h-full w-full"
                onClick={TogleModal}
            >
                <Image
                    src={src}
                    alt={title}
                    width={500}
                    height={500}
                    className={`w-full aspect-auto rounded-sm dark:bg-slate700 h-full object-cover object-left md:block hidden`}
                />
                <div className="md:hidden block my-5">
                    <Image
                        src={src}
                        alt={title}
                        width={500}
                        height={500}
                        className={`mx-auto rounded-sm sm:w-60 w-32`}
                    />
                    <p>
                        {title},{year}
                    </p>
                </div>
            </button>

            {isOpen ? (
                <div
                    className="h-screen w-screen flex items-center z-0 fixed justify-center top-0 right-0 bottom-0 left-0 bg-slate800 bg-opacity-60 backdrop-blur-md text-slate800"
                    onClick={TogleModal}
                >
                    <div className="">
                        <Image
                            src={src}
                            alt={title}
                            width={500}
                            height={500}
                            className="md:w-80 w-44 aspect-auto rounded-md dark:bg-slate700 h-full"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                </div>
            ) : null}
        </div>
    );
}
