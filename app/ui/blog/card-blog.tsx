import Link from "next/link";

interface CardBlogProps {
    title: string;
    description: string;
    date: string;
    link: string;
    tag?: string[];
}

export default function CardBlog({
    title,
    description,
    date,
    link,
    tag,
}: CardBlogProps) {
    return (
        <div className=" border-solid border-2 dark:border-slate-200 border-[#381E70]  p-4 rounded-lg ">
            <Link href={link} className="">
                <div className="space-y-4">
                    <div>
                        <h2 className="text-xl font-semibold">{title}</h2>
                        <p>{description}</p>
                        <p className="text-sm text-slate-400">{date}</p>
                    </div>
                    <div className="flex [&_p]:px-2 [&_p]:py-1 [&_p]:border-solid [&_p]:border-2 [&_p]:border-[#381E70] dark:[&_p]:border-slate-200 [&_p]:rounded-md gap-2 ">
                        <p>{tag}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}
