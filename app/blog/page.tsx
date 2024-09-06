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
        tags: string[];
    };
}) {
    const fetchData = async () => {
        const { props } = generateStaticParams({
            search: searchParams?.search,
            tag: searchParams?.tags,
        });
        const { frontMatter } = props;
        return { frontMatter };
        // const data = props;
    };

    const files = await fetchData();
    console.log(files);

    const tagsArray = getTagsMDX();

    return (
        <div className="px-8 pt-32 space-y-2">
            <h1 className="font-bold text-4xl">Blog</h1>
            <Search />
            <SearchTag tags={tagsArray} />
            {files.frontMatter.length<1 ? 
                <p className="text-base">
                    No Articles Found
                </p>
                :
                <p className="text-base">
                    {files.frontMatter.length} Articles Found
                </p>
            }
            <ul className="flex flex-col gap-4">
                {files.frontMatter.sort((a,b)=>{
                    return new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
                }).map((file, id)=> (
                    <li key={id}>
                        <BlogCard
                            title={file.data.title}
                            description={file.data.description}
                            slug={file.slug}
                            date={file.data.date}
                            tags={file.data.tags}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}
