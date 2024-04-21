"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function Search() {
    const search = useSearchParams();
    const pathName = usePathname();
    const { replace } = useRouter();

    const handleSearch = (term: string) => {
        const params = new URLSearchParams(search);
        if (term) {
            params.set("search", term);
        } else {
            params.delete("search");
        }

        return replace(`${pathName}?${params.toString()}`);
    };

    return (
        <input
            type="text"
            onChange={(e) => {
                handleSearch(e.target.value);
            }}
            placeholder="Search..."
            defaultValue={search.get("search")?.toString()}
            className="flexf w-full p-2 rounded-md border-solid border-slate800 md:border-2 dark:border-slate400 dark:bg-black100 text-slate900 dark:text-slate200"
        />
    );
}
