import Link from "next/link";
import { generateStaticParams } from "../lib/getMDX";

import BlogCard from "../components/blog/blog-card";
import Search from "../components/blog/search";

export default async function Blog({
    searchParams,
}: {
    searchParams?: {
        search: string;
    };
}) {
    const fetchData = async () => {
        const { props } = await generateStaticParams();
        const { frontMatter } = props;
        const { slug } = props;
        return { frontMatter, slug };
    };

    const files = await fetchData();

    if (searchParams?.search) {
        const search = searchParams.search.toLowerCase();
        files.frontMatter = files.frontMatter.filter((file) => {
            return (
                file.title.toLowerCase().includes(search) ||
                file.description.toLowerCase().includes(search) ||
                file.tags.join(" ").toLowerCase().includes(search)
            );
        });
    }

    return (
        <div className="px-4 pt-32 space-y-4">
            <h1 className="font-bold text-4xl">Blog</h1>
            <Search />
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
