import { Suspense } from "react";

import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
    title: string;
    description: string;
    year: number;
    src: string;
    href: string;
    tag?: string[];
}

export default function ProjectCard({
    title,
    src,
    description,
    year,
    href,
    tag,
}: ProjectCardProps) {
    return (
        <div className="group flex flex-col dark:outline dark:outline-2 dark:outline-slate600 transition ease-in-out delay-150  hover:scale-105  duration-300 w-full rounded-lg shadow-xl">
            <Link href={href} className="m-2">
                <Suspense
                    fallback={
                        <div className="w-full aspect-auto p-2 h-44 bg-sand100">
                            Loading...
                        </div>
                    }
                >
                    <Image
                        src={src}
                        alt={title}
                        width={500}
                        height={500}
                        className="w-full rounded-2xl blur-sm group-hover:blur-none transition-all ease-in-out duration-300 p-2"
                        loading="lazy"
                    />
                </Suspense>
                <div className="items-center">
                    <div className="mx-1 inline-flex justify-center items-center mt-3 gap-3">
                        <h3 className="text-lg font-bold group-hover:underline">
                            {title} ,
                        </h3>
                        <p className="text-sm ">{year}</p>
                    </div>
                    <p className="text-sm mx-1 mb-3">{description}</p>
                    <div className="justify-between mb-4">
                        {tag?.map((tag) => (
                            <p
                                key={tag}
                                className="border-solid border font-semibold dark:border-slate200 border-slate700 px-2 py-1 rounded-md text-sm inline-block mx-1"
                            >
                                {tag}
                            </p>
                        ))}
                    </div>
                </div>
            </Link>
        </div>
    );
}
