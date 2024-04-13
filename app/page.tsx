import Link from "next/link";

import { AboutButton, ProjectButton } from "@/app/components/button";

import { FaArrowDown } from "react-icons/fa";

export default function Home() {
    return (
        <main className="flex flex-col mb-10 px-4">
            <div className="flex items-center h-screen flex-col justify-center gap-12 border-solid border-b-2 border-b-slate700 dark:border-b-slate300 relative">
                <header className="flex flex-col transition-all ease-in-out duration-700 absolute left-0">
                    <div>
                        <h1 className="lg:text-7xl md:text-6xl sm:text-4xl text-4xl font-bold gap-4">
                            Ahmd Alfazh <br />
                            Front-end Developer
                        </h1>
                    </div>
                    <p className="md:text-base text-xs pt-4">
                        Build a website with NextJs and TailwindCSS. I&apos;m a
                        student at State University of Surabaya.
                    </p>
                    <AboutButton />
                </header>
                <Link
                    href="#content"
                    className="flex flex-col justify-center items-center group scroll-smooth absolute bottom-10"
                >
                    <FaArrowDown className="text-4xl cursor-pointer animate-bounce" />
                    <div className="p-2 bg-slate600 rounded-full animate-ping absolute hidden group-hover:block"></div>
                </Link>
            </div>
        </main>
    );
}
