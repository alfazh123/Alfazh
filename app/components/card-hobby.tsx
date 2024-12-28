import Link from "next/link";
import { ReactElement } from "react";
import { FaBook } from "react-icons/fa";

interface HobbyProps {
    title: string;
    description: string;
    link: string;
    icon: ReactElement;
}

export function CardHobby(
    { title, description, link, icon}: HobbyProps
) {
    return (
        <>
            <Link
                href={link}
                className={`w-60 h-60 flex flex-col rounded-md place-content-between border-solid border border-slate900 bg-white dark:bg-black100 dark:border-slate200 hover:shadow-lg transition-all ease-in-out duration-500 group-hover:-translate-x-4 group-hover:translate-y-4 group-hover:origin-top group-hover:rotate-6`}
            >
                <div className="mx-3 my-3 space-y-2">
                    <>
                        <div className="flex justify-between">
                            <h3 className="text-2xl font-semibold">{title}</h3>
                            <div className="text-xl">{icon}</div>
                        </div>
                        <p className="text-gray-500">{description}</p>
                    </>
                </div>
                <p className="flex mx-3 my-2 text-slate600 dark:text-slate200 group-hover:underline justify-end content-end">
                    Read more
                </p>
            </Link>
        </>
    );
}

// {
//     title: "Book",
//     description: "Books i've read.",
//     link: "/books",
// },
// {
//     title: "Blogs",
//     description: "Blogs",
//     link: "/blog",
// },
// {
//     title: "Art & Photography",
//     description: "Art & Photography by Alfazh",
//     link: "/art",
// },

export default function Hobby() {
    return (
        <div className="flex items-center justify-center gap-4 flex-wrap lg:pb-28">
            <div className={`md:translate-x-10 md:translate-y-0 md:rotate-12 transition-all duration-500 ease-in-out`}>
                <CardHobby
                    title="Book"
                    description="Books i've read."
                    link="/books"
                    icon={<FaBook />}
                />
            </div>
            <div className={`md:-translate-x-2 md:translate-y-20 md:-rotate-6 transition-all duration-500 ease-in-out`}>
                <CardHobby
                    title="Blogs"
                    description="Blogs"
                    link="/blog"
                    icon={<FaBook />}
                />
            </div>
            <div className={`md:-translate-x-12 lg:translate-y-40 md:translate-y-10 md:rotate-3 transition-all duration-500 ease-in-out`}>
                <CardHobby
                    title="Art & Photography"
                    description="Art & Photography by Alfazh"
                    link="/art"
                    icon={<FaBook />}
                />
            </div>
        </div>
    )
}