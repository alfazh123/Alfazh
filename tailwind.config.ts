import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            animation: {
                "infinite-scroll": "infinite-scroll 10s linear infinite",
            },
            keyframes: {
                "infinite-scroll": {
                    from: { transform: "translateX(0)" },
                    to: { transform: "translateX(-100%)" },
                },
            },
        },
        colors: {
            bone: "#EAF7DF",
            purple: "#381E70",
            slate200: "#e2e8f0",
            slate300: "#cbd5e1",
            slate400: "#94a3b8",
            slate600: "#475569",
            slate700: "#334155",
            slate800: "#1e293b",
            sand: "#DFD8BC",
            sand100: "#eae6d9",
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
export default config;
