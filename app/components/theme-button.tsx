"use client";

import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "next-themes";
import { clsx } from "clsx";

export default function ThemeButton() {
    const { setTheme } = useTheme();

    return (
        <div>
            <button
                onClick={() => setTheme("light")}
                className={
                    clsx(
                        `group transition-all ease-in-out duration-300 px-4 py-2`,
                        `border border-b-2 border-l-0 border-r-0 border-t-0 border-b-slate900`,
                        `rounded-full dark:block hidden`
                    )
                }
                name="theme-button"
                type="button"
                title="Change theme"
            >
                <FaMoon className="md:text-lg text-sm" />
            </button>
            <button
                onClick={() => setTheme("dark")}
                className={
                    clsx(
                        `group transition-all ease-in-out duration-300 px-4 py-2`,
                        `border border-b-2 border-l-0 border-r-0 border-t-0 border-b-slate300`,
                        `rounded-full dark:hidden block`
                    )
                }
                name="theme-button"
                type="button"
                title="Change theme"
            >
                <FaSun className="md:text-lg text-sm" />
            </button>
        </div>
    );
}
