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
            <div className="blog-card group x-3 py-4 md:rounded-lg rounded-md hover:shadow-inner">
                <div className="mx-3 flex flex-col md:gap-2 gap-4">
                    <div className="flex sm:flex-row flex-col justify-between">
                        <Link href={`/blog/${slug}`} className="md:text-2xl sm:text-lg text-base font-semibold hover:underline hover:underline-offset-2">
                            {title}
                        </Link>
                        <p className="md:text-sm text-xs">
                            {date.toLocaleDateString("in-ID", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}
                        </p>
                    </div>
                    <p className="text-gray-500">{description}</p>
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag, id) => (
                            <span
                                key={id}
                                className="text-xs bg-slate100 dark:bg-slate900 text-slate900 dark:text-slate200 px-2 py-1 rounded-md"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </Suspense>
    );
}
