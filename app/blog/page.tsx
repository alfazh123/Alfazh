import { generateStaticParams } from "../lib/getMDX";
import { getTagsMDX } from "../lib/getMDX";
import { Metadata } from "next";

import BlogCard from "../components/blog/blog-card";
import Search from "../components/blog/search";
import SearchTag from "../components/blog/tags";

export const metadata: Metadata = {
    title: "Blog",
    description: "A blog page, where I write about various topics.",
};

export default async function Blog({
    searchParams,
}: {
    searchParams?: {
        search: string;
        tags: string;
    };
}) {
    const fetchData = async () => {
        const { props } = generateStaticParams({
            search: searchParams?.search,
            tag: searchParams?.tags,
        });
        const { frontMatter, slug } = props;
        return { frontMatter, slug };
    };

    const files = await fetchData();

    const tagsArray = getTagsMDX();

    return (
        <div className="px-8 pt-32 space-y-4">
            <h1 className="font-bold text-4xl">Blog</h1>
            <Search />
            <SearchTag tags={tagsArray} />
            <p className="text-base">
                {files.frontMatter.length} Articles Found
            </p>
            <ul className="flex flex-col gap-4">
                {files.frontMatter.map((file, id) => (
                    <li key={id}>
                        <BlogCard
                            title={file.title}
                            description={file.description}
                            slug={files.slug[id]}
                            date={file.date}
                            tags={file.tags}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}
