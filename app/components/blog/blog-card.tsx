import Link from "next/link";

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
        <div className="group rounded-md bg-none hover:bg-slate200 dark:hover:bg-slate800 hover:shadow-lg transition-all ease-in-out duration-500 py-4 cursor-pointer shadow-lg shadow-slate300 dark:shadow-slate800 hover:shadow-slate300">
            <Link href={`/blog/${slug}`}>
                <div className="mx-3 my-2">
                    <div className="flex justify-between">
                        <h3 className="text-2xl font-semibold group-hover:underline group-hover:underline-offset-2">
                            {title}
                        </h3>
                        <div className="text-sm">
                            {date.toLocaleDateString(undefined, {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                            })}
                        </div>
                    </div>
                    <p className="text-gray-500">{description}</p>
                    <div className="flex flex-wrap">
                        {tags.map((tag, id) => (
                            <span
                                key={id}
                                className="text-xs bg-slate200 dark:bg-slate800 text-slate900 dark:text-slate200 px-2 py-1 rounded-md m-1"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </Link>
        </div>
    );
}
