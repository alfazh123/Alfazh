import type { Metadata } from "next";
import { Viewport } from "next";

import { Inter, Source_Code_Pro, Maven_Pro, Fira_Code } from "next/font/google";
import "./globals.css";

import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

const inter = Inter({ subsets: ["latin"] });
const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });
const mavenPro = Maven_Pro({ subsets: ["latin"], weight: ["400"] });

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    minimumScale: 1,
    maximumScale: 1,
    userScalable: false,
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
        <html lang="en" className="relative lg:max-w-[1600px] mx-auto">
            <body className={mavenPro.className}>
                <Navbar />
                <main className="pb-20 mx-auto lg:w-3/4 md:w-5/6 w-11/12 justify-center items-center min-h-screen">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
