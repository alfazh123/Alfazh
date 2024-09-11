import { getPosts } from "../lib/getMDX";
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
        const posts  = getPosts({
            search: searchParams?.search,
            tag: searchParams?.tags,
        });
        return posts ;
        // const data = props;
    };

    const files = await fetchData();

    const tagsArray = getTagsMDX();

    return (
        <div className="px-8 pt-32 space-y-2">
            <h1 className="font-bold text-4xl">Blog</h1>
            <Search />
            <SearchTag tags={tagsArray} />
            {files.length<1 ? 
                <p className="text-base">
                    No Articles Found
                </p>
                :
                <p className="text-base">
                    {files.length} Articles Found
                </p>
            }
            <ul className="flex flex-col gap-4">
                {files.sort((a,b)=>{
                    return new Date(b.posts.date).getTime() - new Date(a.posts.date).getTime()
                }).map((file, id)=> (
                    <li key={id}>
                        <BlogCard
                            title={file.posts.title}
                            description={file.posts.description}
                            slug={file.slug}
                            date={file.posts.date}
                            tags={file.posts.tags}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}
