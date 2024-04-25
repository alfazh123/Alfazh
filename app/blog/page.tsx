import { generateStaticParams } from "../lib/getMDX";
import { Metadata } from "next";

import BlogCard from "../components/blog/blog-card";
import Search from "../components/blog/search";

export const metadata: Metadata = {
    title: "Blog",
    description: "A blog page, where I write about various topics.",
};

export default async function Blog({
    searchParams,
}: {
    searchParams?: {
        search: string;
    };
}) {
    const fetchData = async () => {
        const { props } = await generateStaticParams({
            search: searchParams?.search,
        });
        const { frontMatter } = props;
        const { slug } = props;
        return { frontMatter, slug };
    };

    const files = await fetchData();

    return (
        <div className="px-8 pt-32 space-y-4">
            <h1 className="font-bold text-4xl">Blog</h1>
            <Search />
            <p className="text-base">
                {files.frontMatter.length} Articles Found
            </p>
            <ul className="flex flex-col gap-4">
                {files.frontMatter.map((file, id) => (
                    <li key={id}>
                        <BlogCard
                            title={file.title}
                            description={file.description}
                            slug={file.slug}
                            date={file.date}
                            tags={file.tags}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}
