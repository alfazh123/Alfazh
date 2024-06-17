import Link from "next/link";

import { projects, hobbys } from "./lib/lib";

import { AboutButton, ProjectButton } from "@/app/components/button";
import ProjectCard from "@/app/components/project/project-card";
import TechStack from "./components/tech-stack";
import CardHobby from "./components/card-hobby";

import { FaArrowDown, FaBook } from "react-icons/fa";

export default function Home() {
    return (
        <main className="flex flex-col mb-10 px-8">
            <div className="flex items-center h-screen flex-col justify-center gap-12 border-solid border-b-2 border-b-slate700 dark:border-b-slate300 relative">
                <header className="flex flex-col transition-all ease-in-out duration-700 absolute left-0">
                    <div>
                        <h1 className="lg:text-7xl md:text-6xl sm:text-4xl text-4xl font-bold gap-4">
                            Ahmd Alfazh <br />
                            Front-end Developer
                        </h1>
                    </div>
                    <p className="md:text-base text-xs pt-4 md:w-5/6">
                        Build a website with NextJs and TailwindCSS. I&apos;m a
                        student at State University of Surabaya.
                    </p>
                    <AboutButton />
                </header>

                <Link
                    href={"#content"}
                    className="flex flex-col justify-center items-center group md:text-xl sm:text-base text-sm hover:italic border border-opacity-50 dark:border-white border-black rounded-full md:px-3 px-2 py-1 scroll-smooth absolute md:right-10 md:bottom-10 right-0 bottom-5"
                >
                    See More
                </Link>
            </div>

            <section className="space-y-2 mb-10 mt-32 scroll-m-20" id="content">
                <h3 className="text-2xl font-semibold">Some Project</h3>
                <p className="text-gray-500">
                    Here&apos;s latest project that I&apos;ve been working on
                </p>
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5">
                    {projects.map((project, id) => (
                        <div className={`${id <= 1 ? "" : "hidden"}`} key={id}>
                            <ProjectCard key={id} {...project} />
                        </div>
                    ))}
                    <ProjectButton />
                </div>
            </section>

            <section id="tech-stack" className="my-10 space-y-8">
                <h3 className="text-2xl font-semibold">Tech Stack</h3>
                <div className="flex mx-auto justify-center">
                    <TechStack />
                </div>
            </section>

            <section id="hobby" className="my-10">
                <h3 className="text-2xl font-semibold my-4">Hobby</h3>
                <div className="flex items-center justify-center gap-4 flex-wrap">
                    {hobbys.map((hobby, id) => (
                        <CardHobby
                            key={id}
                            title={hobby.title}
                            description={hobby.description}
                            link={hobby.link}
                            icon={<FaBook />}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}
