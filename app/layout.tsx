import type { Metadata } from "next";
import { Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";

import { Maven_Pro } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";

import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

const mavenPro = Maven_Pro({ subsets: ["latin"], weight: ["400"] });

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    minimumScale: 1,
    maximumScale: 6,
    userScalable: true,
};

export const metadata: Metadata = {
    title: {
        template: " %s | Ahmd Mufahras Li Alfazh Assardew",
        default: "Ahmd Mufahras Li Alfazh Assardew",
    },
    description:
        "A Portfolio Website by Alfazh, show some of my Pprojects, Art, and Blog.",
    metadataBase: new URL("https://alfazh.vercel.app"),
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className="relative lg:max-w-[1200px] mx-auto bg-scroll bg-no-repeat bg-right"
        >
            <body
                // style={{ backgroundImage: "url(/bg.svg)" }}
                className={`transition-all ease-linear duration-300  bg-fixed bg-no-repeat bg-right bg-opacity-10`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Navbar />
                    <main className=" mx-auto lg:w-5/6 md:w-5/6 w-full justify-center items-center min-h-screen">
                        {children}
                        <Analytics />
                    </main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
