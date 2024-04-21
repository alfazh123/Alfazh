import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function generateStaticParams({ search }: { search?: string }) {
    // const dir = "./app/posts";
    const dir = path.join(process.cwd(), "app/posts");

    const files = fs.readdirSync(dir);

    const contentFile = files.map((file) => {
        return fs.readFileSync(`${dir}/${file}`, "utf8");
    });

    const slug = files.map((file) => {
        const slug = file.replace(".mdx", "");
        return slug;
    });

    let frontMatter = contentFile.map((file) => {
        const data = matter(file);
        return data.data;
    });

    if (search) {
        const searchs = search.toLowerCase();
        frontMatter = frontMatter.filter((file) => {
            return (
                file.title.toLowerCase().includes(searchs) ||
                file.description.toLowerCase().includes(searchs) ||
                file.tags.join(" ").toLowerCase().includes(searchs)
            );
        });
    }

    return {
        props: {
            frontMatter,
            slug,
        },
    };
}
