"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import ThemeButton from "./theme-button";
import {
    IoHomeOutline,
    IoHome,
    IoNewspaperOutline,
    IoNewspaper,
    IoFileTrayStackedOutline,
    IoFileTrayStacked,
    IoAccessibilityOutline,
    IoAccessibility,
    IoIdCardOutline,
    IoIdCard,
} from "react-icons/io5";

const linksIconBehavior = {
    className: "text-xl md:hidden block text-black",
};

const links = [
    {
        href: "/",
        label: "Home",
        icon: [
            <IoHomeOutline className={`text-xl`} />,
            <IoHome className={`text-xl`} />,
        ],
    },
    {
        href: "/blog",
        label: "Blog",
        icon: [
            <IoNewspaperOutline className={`text-xl`} />,
            <IoNewspaper className={`text-xl`} />,
        ],
    },
    {
        href: "/project",
        label: "Project",
        icon: [
            <IoFileTrayStackedOutline className={`text-xl`} />,
            <IoFileTrayStacked className={`text-xl`} />,
        ],
    },
    {
        href: "/about",
        label: "About",
        icon: [
            // <IoAccessibilityOutline className={`text-xl`} />,
            // <IoAccessibility className={`text-xl`} />,
            <IoIdCardOutline className={`text-xl`} />,
            <IoIdCard className={`text-xl`} />,
        ],
        // <IoAccessibility className={`text-xl`} />,
    },
];

export default function Navbar() {
    const pathName = usePathname();

    const isAbout = pathName === "/art" || pathName === "/books";

    const contentBlog = pathName.split("/")[1] === "blog";

    return (
        <div className="fixed flex justify-between w-full backdrop-blur-lg z-10 lg:max-w-[1600px] text-black dark:text-white">
            <ul className="md:flex hidden md:px-16 md:py-5 px-4 py-3 w-full items-center">
                {links.map(({ href, label, icon }) => (
                    <li key={`${href}${label}`}>
                        <Link
                            href={href}
                            className={` ${
                                pathName === href
                                    ? "font-extrabold md:text-lg text-base md:px-3 px-2 hover:no-underline"
                                    : "hover:underline md:px-3 px-2 md:text-base text-sm"
                            } 
                            ${
                                isAbout && href === "/about"
                                    ? "font-extrabold md:text-lg text-base md:px-3 px-2 hover:no-underline"
                                    : "hover:underline md:px-3 px-2 md:text-base text-sm"
                            }
                            ${
                                contentBlog && href === "/blog"
                                    ? "font-extrabold md:text-lg text-base md:px-3 px-2 hover:no-underline"
                                    : "hover:underline md:px-3 px-2 md:text-base text-sm"
                            }
                            `}
                        >
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
            <ul className="md:hidden md:px-16 md:py-5 px-4 py-3 flex w-full items-center">
                {links.map(({ href, label, icon }) => (
                    <li key={`${href}${label}`} className="sm:px-4 px-2">
                        <Link href={href}>
                            <p
                                className={` ${
                                    pathName === href
                                        ? "font-extrabold md:text-lg text-base md:px-3 px-2 hover:no-underline"
                                        : "hover:rotate-12 md:px-3 px-2 md:text-base text-sm"
                                }
                            ${
                                isAbout && href === "/about"
                                    ? "font-extrabold md:text-lg text-base md:px-3 px-2 hover:no-underline"
                                    : "hover:underline md:px-3 px-2 md:text-base text-sm"
                            }
                            ${
                                contentBlog && href === "/blog"
                                    ? "font-extrabold md:text-lg text-base md:px-3 px-2 hover:no-underline"
                                    : "hover:underline md:px-3 px-2 md:text-base text-sm"
                            }
                            `}
                            >
                                {(href === "/about" && isAbout) ||
                                (href === "/blog" && contentBlog) ||
                                pathName === href
                                    ? icon[1]
                                    : icon[0]}
                            </p>
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="flex md:px-16 md:py-5 px-4 py-3 items-center">
                <ThemeButton />
            </div>
        </div>
    );
}
