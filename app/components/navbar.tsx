"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import ThemeButton from "./theme-button";

const links = [
    {
        href: "/",
        label: "Home",
    },
    {
        href: "/blog",
        label: "Blog",
    },
    {
        href: "/project",
        label: "Project",
    },
    {
        href: "/about",
        label: "About",
    },
];

export default function Navbar() {
    const pathName = usePathname();

    const isAbout = pathName === "/art" || pathName === "/books";

    return (
        <div className="fixed flex justify-between w-full backdrop-blur-md z-10 lg:max-w-[1600px]">
            <ul className="md:px-16 md:py-5 px-4 py-3 flex justify-center items-center">
                {links.map(({ href, label }) => (
                    <li key={`${href}${label}`}>
                        <Link
                            href={href}
                            className={` ${
                                pathName === href
                                    ? "font-extrabold md:text-lg text-md md:px-3 px-2 hover:no-underline"
                                    : "hover:underline md:px-3 px-2 md:text-base text-xs"
                            } 
                            ${
                                isAbout && href === "/about"
                                    ? "font-extrabold md:text-lg text-md md:px-3 px-2 hover:no-underline"
                                    : "hover:underline md:px-3 px-2 md:text-base text-xs"
                            }
                            `}
                        >
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="md:px-16 md:py-5 px-4 py-3">
                <ThemeButton />
            </div>
        </div>
    );
}
