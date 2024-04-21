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
            className="group transition-all ease-in-out duration-300 px-4 py-2 shadow-lg dark:shadow-lg dark:shadow-slate600 rounded-full"
            name="theme-button"
            type="button"
            title="Change theme"
        >
            <FaMoon className="md:text-lg text-sm dark:block hidden" />
            <FaSun className="md:text-lg text-sm dark:hidden block" />
        </button>
    );
}
