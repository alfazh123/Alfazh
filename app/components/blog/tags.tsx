"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

import { clsx } from 'clsx'

interface SearchTagProps {
    tags: string[];
}

export default function SearchTag(
    { tags }: SearchTagProps
) 
{
    const search = useSearchParams();
    const pathName = usePathname();
    const { replace } = useRouter();

    const handleSearch = (term: string) => {
        const params = new URLSearchParams(search);
        if (term) {
            if (!params.has("tags", term)) {
                params.append("tags", term);
            } else {
                params.delete("tags", term);
            }
        } else {
            params.delete("tags");
        }
        return replace(`${pathName}?${params.toString()}`);
    };

    const isExists = (tag: string) => {
        const params = new URLSearchParams(search)
        return params.has("tags",tag)
    }

    return (
        <div className="flex gap-4 py-1 items-center">
            <div className="font-bold">Tags: </div>
            <div className="flex gap-2 overflow-auto no-scrollbar p-2">
                <button
                    type="button"
                    onClick={(e) => {
                        handleSearch('');
                    }}
                    className="px-2 py-1 text-sm font-semibold border border-1 border-slate900 dark:border-slate200 hover:bg-slate200 dark:hover:bg-slate900 text-black dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white"
                >
                    All
                </button>
                {tags.map((tag, id)=> (
                    <div className="flex justify-center items-center h-full">
                        <label htmlFor={tag} className={clsx(
                            `${isExists(tag) ? `outline-none ring-2 ring-offset-2 ring-offset-white` : null }`, // conditional to activate button when exists in search params
                            'px-2 py-1 text-sm font-semibold border border-1 rounded-md', // position and size
                            'bg-slate200 border-slate900 hover:bg-slate300 text-black', // color component in light theme
                            'dark:bg-slate900 dark:hover:bg-slate800 dark:border-slate200 dark:text-white' // color component in dark theme
                        )}>
                            {tag}
                        </label>
                        
                        <input key={id} type="checkbox" className={`hidden right-0 -z-10 left-0 w-full h-6 px-2`} name={tag} value={tag} id={tag} 
                            onClick={
                                (e) => {
                                    handleSearch(e.currentTarget.value);
                                }
                            }
                        />
                    </div>
                ))}
                
            </div>
        </div>
    );
}
