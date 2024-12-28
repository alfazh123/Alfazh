import { Suspense } from "react";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import { ImageSkeleton, SkeletonProjectCard } from "../skeleton";
import { IoLogoGithub, IoLinkOutline } from "react-icons/io5";

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

    const isGithub = (href: string) => {
        return href.includes("github");
    }

    return (
        // <Suspense fallback={<SkeletonProjectCard />}>
            // <div className="project-card group flex flex-col h-full border dark:border-x-slate600 border-x-slate400 border-y-slate300 dark:border-y-slate200 transition ease-in-out delay-150 hover:bg-slate200 dark:hover:bg-black100 bg-white dark:bg-black100 bg-opacity-30 dark:bg-opacity-30  duration-300 w-full rounded-lg">
            <div className={clsx(
                `group flex flex-col sm:w-96 h-full w-full border rounded-lg border-x-slate400 border-y-slate300 dark:border-x-slate600 dark:border-y-slate400`,
                `hover:bg-slate100 dark:hover:bg-black100 bg-white dark:bg-black100 bg-opacity-30 dark:bg-opacity-30`,
                `transition ease-in-out delay-150 duration-500`
            )}>
                <Link href={`/project/${href}`} className="project-card-inner m-2 space-y-6">
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
                            <h3 className="text-xl font-bold">
                                {title},
                            </h3>
                            <p className="text-sm ">{year}</p>
                        </div>
                        <p className="text-sm mx-1 mb-3">{description}</p>
                        <div className="mb-4 flex flex-wrap gap-2 mx-1">
                            {tag?.map((tag) => (
                                <p
                                    key={tag}
                                    className="border-solid border font-semibold dark:border-slate200 border-slate400 px-2 py-1 rounded-md text-sm inline-block"
                                >
                                    {tag}
                                </p>
                            ))}
                        </div>

                    </div>
                    <div className="flex gap-4 mx-1 pb-4 group-hover:text-tosca100 transition-all duration-300 ease-in-out">
                        {isGithub(href) ? (
                            <IoLogoGithub className="text-2xl " />
                        ) : (
                            <IoLinkOutline className="text-2xl " />
                        )} 
                        <p className="truncate font-semibold">
                            {`/project/${href}`}
                        </p>
                    </div>

                </Link>
            </div>
        // </Suspense>
    );
}
