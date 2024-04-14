import fs from "fs";
import matter from "gray-matter";

import { MDXRemote } from "next-mdx-remote/rsc";

function getPost({ slug }: { slug: string }) {
    const source = fs.readFileSync(`./app/posts/${slug}.mdx`, "utf8");
    const { content, data } = matter(source);

    return { content, data };
}

export default function Blog({ params }: { params: { slug: string } }) {
    const props = getPost(params);
    return (
        <div className="px-4 pt-32">
            <h1 className="font-bold text-4xl">Blog</h1>
            <MDXRemote source={props.content} />
        </div>
    );
}
