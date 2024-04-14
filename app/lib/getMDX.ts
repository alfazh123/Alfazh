import fs from "fs";
import matter from "gray-matter";

export function generateStaticParams() {
    const dir = "./app/posts";
    const files = fs.readdirSync(dir);

    const contentFile = files.map((file) => {
        return fs.readFileSync(`${dir}/${file}`, "utf8");
    });

    const slug = files.map((file) => {
        const slug = file.replace(".mdx", "");
        return slug;
    });

    const frontMatter = contentFile.map((file) => {
        const data = matter(file);
        return data.data;
    });

    return {
        props: {
            frontMatter,
            slug,
        },
    };
}

export async function getFronMatter() {
    const dir = "./app/posts";
    const files = fs.readdirSync(dir);

    const contentFile = files.map((file) => {
        return fs.readFileSync(`${dir}/${file}`, "utf8");
    });

    const slug = files.map((file) => {
        const slug = file.replace(".mdx", "");
        return slug;
    });

    const frontMatter = contentFile.map((file) => {
        const data = matter(file);
        return data.data;
    });

    return {
        frontMatter,
        slug,
    };
}
