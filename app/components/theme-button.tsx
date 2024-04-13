"use client";

import { FaMoon, FaSun } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function ThemeButton() {
    const [theme, setTheme] = useState(true);

    useEffect(() => {
        const tema = localStorage.getItem("tema");
        if (tema === "dark") {
            setTheme(false);
        }
    }, []);

    useEffect(() => {
        if (theme) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("tema", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("tema", "light");
        }
    }, [theme]);

    return (
        <button
            onClick={() => setTheme(!theme)}
            className="transition-all ease-in-out duration-700 md:px-4 px-3 py-2 border-solid border-2 border-slate-700 dark:border-slate-100 rounded-full"
            name="theme-button"
            type="button"
            title="Change theme"
        >
            <FaMoon className="md:text-lg text-sm dark:block hidden" />
            <FaSun className="md:text-lg text-sm hover:animate-spin dark:hidden block" />
        </button>
    );
}
