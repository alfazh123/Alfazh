"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebounce, useDebouncedCallback } from "use-debounce";

export default function Search() {
    const search = useSearchParams();
    const pathName = usePathname();
    const { replace } = useRouter();

    const handleSearch = useDebouncedCallback((term: string) => {
        const params = new URLSearchParams(search);
        if (term) {
            params.set("search", term);
        } else {
            params.delete("search");
        }

        return replace(`${pathName}?${params.toString()}`);
    }, 300);

    return (
        <input
            onChange={(e) => {
                handleSearch(e.target.value);
            }}
            placeholder="Search..."
            defaultValue={search.get("search")?.toString()}
            className="flexf w-full p-2 rounded-md border-solid border-slate800 md:border-2 dark:border-slate400 dark:bg-black100 text-slate900 dark:text-slate200"
        />
    );
}
