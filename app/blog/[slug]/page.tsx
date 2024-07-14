import fs from "fs";
import matter from "gray-matter";
import path from "path";
import clsx from "clsx";

import Link from 'next/link';
import {Suspense} from 'react';

import { Inter } from "next/font/google";
import { IoMdArrowBack } from "react-icons/io";
import { SkeletonBlogContent } from "@/app/components/skeleton";

import { CustomMDX } from "@/app/components/blog/mdx";
import { getHeadings } from "@/app/lib/getMDX";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

function getPost() {
    const dir = path.join(process.cwd(), "app/posts");

    const files = fs
        .readdirSync(dir)
        .filter((file) => path.extname(file) === ".mdx");

    return files.map((filename) => {
        const { content, data } = matter(
            fs.readFileSync(path.join(dir, filename), "utf8")
        );
        const slug = path.basename(filename, ".mdx");

        return {
            slug,
            data,
            content,
        };
    });
}

export default function Blog({ params }: { params: { slug: string } }) {
    const props = getPost().find((post) => post.slug === params.slug);


    if (!props) {
        return <div>Post not found</div>;
    }
    return (
        <div className="pt-28">

            <section
                className={`px-4 md:pt-8 pt-8 backdrop-blur-2xl space-y-5 bg-white dark:bg-black bg-opacity-40 dark:bg-opacity-25 md:rounded-xl rounded-lg ${inter.className}`}
            >
                <Link href={`/blog`} className="relative group w-48 md:sticky md:top-20 md:left-4 left-0">
                    <span className={clsx(
                        `absolute left-12 top-3 hidden z-10 w-full dark:text-white`,
                        `group-hover:transition-all group-hover:translate-x-0 group-hover:duration-[9000ms] group-hover:ease-in-out`,
                        `md:group-hover:flex`
                    )}>Back To Blog Page</span>

                    <div className={clsx(
                        `w-12 h-12 rounded-full overflow-hidden ring-2 ring-slate400 flex items-center`,
                        `md:group-hover:transition-all md:group-hover:duration-100 md:group-hover:ease-in-out md:group-hover:w-48`,
                        `backdrop-blur-lg backdrop-filter backdrop-saturate-150 backdrop-contrast-200 dark:bg-black100 bg-opacity-70`
                    )}>
                        <div className="bg-slate900 bg-opacity-20  group-hover:bg-opacity-45 w-12 h-12 p-3 rounded-full">
                            <IoMdArrowBack className="text-2xl dark:text-white text-black100" />
                        </div>
                    </div>
                </Link>

                <header className="flex md:flex-row justify-center flex-col gap-4 min-h-32 mb:pb-0 pb-20">
                    <div className="flex flex-col md:items-center items-start md:text-center text-left gap-4">
                        <h1 className="font-bold text-4xl">{props.data.title}</h1>
                        <p className="text-base">
                            {props.data.date.toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}
                        </p>
                    </div>
                </header>
                <article className="prose md:px-4 px-2 text-black prose-headings:text-[#1e3a8a] dark:text-white prose-headings:dark:text-white pb-20 prose-p:leading-normal prose-li:leading-4 mx-auto">
                    <CustomMDX source={props.content} />
                </article>
            </section>
        </div>
    );
}
