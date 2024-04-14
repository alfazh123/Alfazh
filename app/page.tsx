import Link from "next/link";

import { projects, hobbys } from "./lib/lib";

import { AboutButton, ProjectButton } from "@/app/components/button";
import ProjectCard from "@/app/components/project/project-card";
import TechStack from "./components/tech-stack";
import CardHobby from "./components/card-hobby";

import { FaArrowDown } from "react-icons/fa";
import { FaBookAtlas } from "react-icons/fa6";

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

            <section className="space-y-2 pt-32 mb-10" id="content">
                <h3 className="text-2xl font-semibold">Some Project</h3>
                <p className="text-gray-500">
                    Here&apos;s latest project that I&apos;ve been working on
                </p>
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5">
                    {projects.map((project, id) => (
                        <div className={`${id <= 2 ? "" : "hidden"}`} key={id}>
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
                <div className="flex mx-auto items-center justify-center gap-4 flex-wrap flex-col sm:flex-row">
                    {hobbys.map((hobby, id) => (
                        <CardHobby
                            key={id}
                            title={hobby.title}
                            description={hobby.description}
                            image={hobby.image}
                            link={hobby.link}
                            icon={<FaBookAtlas />}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}
