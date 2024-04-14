import fs from "fs";
import matter from "gray-matter";

import { MDXRemote } from "next-mdx-remote/rsc";
import path from "path";

function getPost({ slug }: { slug: string }) {
    const source = fs.readFileSync(
        path.join("./app/posts", `${slug}.mdx`),
        "utf8"
    );
    const { content, data } = matter(source);

    return { content, data };
}

export default function Blog({ params }: { params: { slug: string } }) {
    const props = getPost(params);
    return (
        <div className="px-4 pt-32">
            <h1 className="font-bold text-4xl">{props.data.title}</h1>
            <MDXRemote source={props.content} />
        </div>
    );
}
