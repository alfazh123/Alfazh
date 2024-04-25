"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

interface SearchTagProps {
    tags: string[];
}

export default function SearchTag({ tags }: SearchTagProps) {
    const search = useSearchParams();
    const pathName = usePathname();
    const { replace } = useRouter();

    const handleSearch = (term: string) => {
        const params = new URLSearchParams(search);
        if (term) {
            params.set("tags", term);
        } else {
            params.delete("tags");
        }
        console.log(params.toString());
        return replace(`${pathName}?${params.toString()}`);
    };

    return (
        <div className="flex gap-4">
            <h3 className="font-bold">Tags : </h3>
            <div className="flex gap-2">
                <button
                    type="button"
                    onClick={(e) => {
                        handleSearch("");
                    }}
                    className="px-2 py-1 text-sm font-semibold border border-1 border-slate900 dark:border-slate200 hover:bg-slate200 dark:hover:bg-slate900 text-black dark:text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white"
                >
                    All
                </button>
                {tags.map((tag, id) => (
                    <button
                        key={id}
                        type="button"
                        onClick={() => {
                            handleSearch(tag);
                        }}
                        className="px-2 py-1 text-sm font-semibold border border-1 border-slate900 dark:border-slate200 hover:bg-slate200 dark:hover:bg-slate900 text-black dark:text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white"
                    >
                        {tag}
                    </button>
                ))}
            </div>
        </div>
    );
}
