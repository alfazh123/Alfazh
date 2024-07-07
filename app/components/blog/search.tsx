"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { useDebounce, useDebouncedCallback } from "use-debounce";


export default function Search( ) {
    const search = useSearchParams();
    const pathName = usePathname();
    const { replace } = useRouter();

    const searchBar = useRef<HTMLInputElement>(null);


    useEffect(()=> {
        window.innerWidth < 768 ? 
        null : searchBar.current?.focus();
    }, []);


    const handleSearch = useDebouncedCallback((term: string) => {
        const params = new URLSearchParams(search);
        if (term) {
            params.set("search", term);
        } else {
            params.delete("search");
        }

        return replace(`${pathName}?${params.toString()}`);
    }, 100);

    return (
        <input
            onChange={(e) => {
                handleSearch(e.target.value);
            }}
            ref={searchBar}
            placeholder="Search..."
            defaultValue={search.get("search")?.toString()}
            className="input-field-blog flex w-full p-2 rounded-md border-solid border-slate800 dark:border-slate400 dark:bg-black100 text-slate900 dark:text-slate200"
        />
    );
}
