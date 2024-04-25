import fs from "fs";
import matter from "gray-matter";
import path from "path";

import { MDXRemote } from "next-mdx-remote/rsc";
import { CustomMDX } from "@/app/components/blog/mdx";
import dynamic from "next/dynamic";
import { memo } from "react";
import { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";

export async function generateStaticParams() {
    const files = fs.readdirSync(path.join("./app/posts"));

    const paths = files.map((filename) => ({
        slug: filename.replace(".mdx", ""),
    }));

    return paths;
}

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
        <section className="px-4 pt-32 backdrop-blur-2xl bg-white dark:bg-black100 bg-opacity-40 dark:bg-opacity-25 rounded-md">
            <header className="h-32">
                <h1 className="font-bold text-4xl">{props.data.title}</h1>
                <p className="text-base">
                    {props.data.date.toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
                </p>
            </header>
            <article className="prose px-4 dark:text-white prose-headings:dark:text-white flex flex-col mx-auto pb-20">
                {/* <MDXRemote source={props.content} /> */}
                <CustomMDX source={props.content} />
            </article>
        </section>
    );
}
