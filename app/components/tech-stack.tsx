'use client';

import Image from "next/image";

import Link from "next/link";

const techStack = [
    {
        label: "Next.js",
        link: "https://nextjs.org",
    },
    {
        label: "Android",
        link: "https://developer.android.com",
    },
    {
        label: "Kotlin",
        link: "https://kotlinlang.org",
    },
    {
        label: "Docker",
        link: "https://www.docker.com",
    },
    {
        label: "Firebase",
        link: "https://firebase.google.com",
    },
    {
        label: "PostgreSQL",
        link: "https://www.postgresql.org",
    },
    {
        label: "MDX",
        link: "https://mdxjs.com",
    },
    {
        label: "Redux",
        link: "https://reduxjs.org",
    },
    {
        label: "TailwindCSS",
        link: "https://tailwindcss.com",
    }
]

export default function TechStack() {
    return (

        <div className="flex flex-wrap w-full gap-2 mt-8 px-12">
            {techStack.map((tech, id) => {
                return (
                    <div className="tech dark:techdark flex h-10 gap-2 items-center border border-slate400 px-2 pl-1 pr-4 rounded-full">
                        <Image
                            src="/author.jpg"
                            alt="me"
                            width={30}
                            height={30}
                            className="rounded-full grayscale"/>
                        <p>{tech.label}</p>
                    </div>
                );
            })}
        </div>
    );
}