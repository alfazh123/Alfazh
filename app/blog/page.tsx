import Link from "next/link";

import { generateStaticParams } from "../lib/getMDX";

export default async function Blog() {
    const fetchData = async () => {
        const { props } = await generateStaticParams();
        const { frontMatter } = props;
        const { slug } = props;
        return { frontMatter, slug };
    };

    const files = await fetchData();

    return (
        <div className="px-4 pt-32">
            <h1 className="font-bold text-4xl">Blog</h1>
            <ul>
                {files.frontMatter.map((file, id) => (
                    <li key={id}>
                        <Link href={`/blog/${file.slug}`}>
                            {file.title}, {file.slug}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
