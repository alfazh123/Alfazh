import { Suspense } from "react";

import Image from "next/image";
import Link from "next/link";

import { ImageSkeleton, SkeletonProjectCard } from "../skeleton";

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
        <Suspense fallback={<SkeletonProjectCard />}>
            <div className="group flex flex-col h-full transition ease-in-out delay-150  hover:scale-105 bg-white dark:bg-black100 bg-opacity-30 dark:bg-opacity-30  duration-300 w-full rounded-lg shadow-md shadow-slate300 dark:shadow-slate800 hover:shadow-lg hover:shadow-slate300">
                <Link href={href} className="m-2">
                    <Suspense fallback={<ImageSkeleton />}>
                        <Image
                            src={src}
                            alt={title}
                            width={500}
                            height={500}
                            className="w-full rounded-2xl p-2"
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
        </Suspense>
    );
}
