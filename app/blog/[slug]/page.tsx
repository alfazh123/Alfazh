import fs from "fs";
import matter from "gray-matter";
import path from "path";
import clsx from "clsx";

import { Inter } from "next/font/google";
import { BackToBlogButton } from "@/app/components/button";

import { CustomMDX } from "@/app/components/blog/mdx";
import { getHeadings } from "@/app/lib/getMDX";
import TableOfContents from "@/app/components/blog/toc";

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

function getUpdateDate({ slug }: { slug: string } ) {
    const dir = path.join(process.cwd(), "app/posts");

    const date = fs.statSync(path.join(dir, slug + ".mdx")).mtime;

    return date;
}

export default function Blog({ params }: { params: { slug: string } }) {
    const props = getPost().find((post) => post.slug === params.slug);

    const content = props?.content || '';
    const headings = getHeadings(content);

    const lastChangeDate = getUpdateDate({ slug: params.slug });
    console.log(lastChangeDate);

    if (!props) {
        return <div>Post not found</div>;
    }
    return (
        <div className="md:pt-28 pt-16">
            <section
                className={`px-4 md:pt-8 pt-8 backdrop-blur-2xl space-y-5 bg-white dark:bg-black bg-opacity-40 dark:bg-opacity-25 md:rounded-xl rounded-lg ${inter.className}`}
            >

                <header className="flex md:flex-row justify-between flex-col gap-8 min-h-32 py-20">
                    <div className="w-52">
                        <BackToBlogButton />
                    </div>
                    <div className="flex flex-col lg:items-center md:items-end lg:text-center text-right gap-4">
                        <h1 className="font-bold text-4xl">{props.data.title}</h1>
                        <p className="text-base">
                            Create at : {props.data.date.toLocaleDateString("id-ID", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}
                        </p>
                        <p className="text-xs">
                            Last updated: {lastChangeDate.toLocaleDateString("id-ID", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}
                        </p>
                    </div>
                    <div className="w-52 lg:block hidden">

                    </div>
                </header>

                <hr />

                <span className="md:grid md:grid-cols-3">
                    <span className="md:hidden block mt-10 sticky top-14">
                        <TableOfContents headings={headings} />
                    </span>
                    <article className="prose prose-quoteless prose-neutral dark:prose-invert mx-2 md:col-span-2 max-w-none flex flex-col md:px-4 px-2 text-black prose-headings:text-[#1e3a8a] dark:text-white prose-headings:dark:text-white pb-20 prose-p:leading-normal prose-li:leading-4">
                        <CustomMDX source={props.content} />
                    </article>
                    <span className="max-w-96 w-full md:block hidden">
                        <TableOfContents headings={headings} />
                    </span>
                </span>
                
            </section>
        </div>
    );
}
