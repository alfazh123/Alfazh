'use client';

import Image from "next/image";

import Link from "next/link";

const techStack = [
    {
        label: "Next.js",
        link: "https://nextjs.org",
        image: "/techstack/nextjs.svg",
    },
    {
        label: "Android",
        link: "https://developer.android.com",
        image: "/techstack/android.webp",
    },
    {
        label: "Kotlin",
        link: "https://kotlinlang.org",
        image: "/techstack/kotlin.svg",
    },
    {
        label: "Docker",
        link: "https://www.docker.com",
        image: "/techstack/docker.svg",
    },
    {
        label: "Firebase",
        link: "https://firebase.google.com",
        image: "/techstack/firebase.svg",
    },
    {
        label: "PostgreSQL",
        link: "https://www.postgresql.org",
        image: "/techstack/postgresql.png",
    },
    {
        label: "MDX",
        link: "https://mdxjs.com",
        image: "/techstack/mdx.svg",
    },
    {
        label: "Redux",
        link: "https://reduxjs.org",
        image: "/techstack/redux.png",
    },
    {
        label: "TailwindCSS",
        link: "https://tailwindcss.com",
        image: "/techstack/tailwindcss.svg",
    }
]

export default function TechStack() {
    return (

        <div className="flex flex-wrap w-full gap-2 mt-8 md:px-12 sm:px-8 px-4">
            {techStack.map((tech, id) => {
                return (
                    <div key={id} className="tech dark:techdark flex h-10 gap-2 items-center border border-slate400 sm:pl-2 pl-1 pr-4 rounded-full">
                        <Image
                            src={tech.image}
                            alt="me"
                            width={30}
                            height={30}
                            className="p-1 md:w-8 w-6"/>
                        <p className="sm:text-base text-sm">{tech.label}</p>
                    </div>
                );
            })}
        </div>
    );
}