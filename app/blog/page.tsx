import Link from "next/link";
import { generateStaticParams } from "../lib/getMDX";

import BlogCard from "../components/blog/blog-card";

export default async function Blog() {
    const fetchData = async () => {
        const { props } = await generateStaticParams();
        const { frontMatter } = props;
        const { slug } = props;
        return { frontMatter, slug };
    };

    const files = await fetchData();

    return (
        <div className="px-4 pt-32 space-y-4">
            <h1 className="font-bold text-4xl">Blog</h1>
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