"use client";

import { FaMoon, FaSun } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeButton() {
    const { setTheme } = useTheme();

    return (
        <div>
            <button
                onClick={() => setTheme("light")}
                className="group transition-all ease-in-out duration-300 px-4 py-2 shadow-lg dark:shadow-lg dark:shadow-slate600 rounded-full dark:block hidden"
                name="theme-button"
                type="button"
                title="Change theme"
            >
                <FaMoon className="md:text-lg text-sm" />
            </button>
            <button
                onClick={() => setTheme("dark")}
                className="group transition-all ease-in-out duration-300 px-4 py-2 shadow-lg dark:shadow-lg dark:shadow-slate600 rounded-full dark:hidden block"
                name="theme-button"
                type="button"
                title="Change theme"
            >
                <FaSun className="md:text-lg text-sm" />
            </button>
        </div>
    );
}
