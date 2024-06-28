import Link from "next/link";
import { Suspense } from "react";

import { SkeletonBlogCard } from '@/app/components/skeleton'

interface BlogCardProps {
    title: string;
    description: string;
    date: Date;
    slug: string;
    tags: string[];
}

export default function BlogCard({
    title,
    description,
    date,
    slug,
    tags,
}: BlogCardProps) {
    return (
        <Suspense fallback={<SkeletonBlogCard />}>
            <div className="blog-card group  hover:bg-opacity-40 dark:hover:bg-opacity-30 x-3 py-4 rounded-md">
                <div className="mx-3">
                    <div className="flex justify-between">
                        <Link href={`/blog/${slug}`} className="text-2xl font-semibold group-hover:underline group-hover:underline-offset-2">
                            {title}
                        </Link>
                        <div className="text-sm text-right">
                            {date.toLocaleDateString("in-ID", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}
                        </div>
                    </div>
                    <p className="text-gray-500">{description}</p>
                    {/* <div className="flex flex-wrap">
                        {tags.map((tag, id) => (
                            <span
                                key={id}
                                className="text-xs bg-slate300 dark:bg-slate900 text-slate900 dark:text-slate200 px-2 py-1 rounded-md m-1"
                            >
                                {tag}
                            </span>
                        ))}
                    </div> */}
                </div>
            </div>
        </Suspense>
    );
}
