import fs from "fs";
import matter from "gray-matter";
import path from "path";

import Link from 'next/link';
import {Suspense} from 'react';

import { Inter } from "next/font/google";
import { IoMdArrowBack } from "react-icons/io";
import { SkeletonBlogContent } from "@/app/components/skeleton";

import { CustomMDX } from "@/app/components/blog/mdx";

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
        <section
            className={`px-4 pt-24 backdrop-blur-2xl space-y-5 bg-white dark:bg-black100 bg-opacity-40 dark:bg-opacity-25 rounded-md ${inter.className}`}
        >
            {/* <Suspense fallback={<SkeletonBlogContent />}> */}
                <header className="flex md:flex-row flex-col gap-4 min-h-32 justify-center">
                    <Link href="/blog">
                        <div className="bg-slate600 bg-opacity-20 hover:bg-opacity-45 w-12 h-12 p-3 rounded-full">
                                <IoMdArrowBack className="text-2xl dark:text-white text-black100" />
                        </div>
                    </Link>
                    <div>
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
                {/* atur line height */}
                {/* <article className="prose px-4 text-black prose-headings:text-black dark:text-white prose-headings:dark:text-white pb-20 prose-p:leading-normal prose-li:leading-3"> */}
                <article className="prose md:px-4 px-2 text-black prose-headings:text-black dark:text-white prose-headings:dark:text-white pb-20 prose-p:leading-normal prose-li:leading-4 mx-auto">
                    <CustomMDX source={props.content} />
                </article>
            {/* </Suspense> */}
        </section>
    );
}
