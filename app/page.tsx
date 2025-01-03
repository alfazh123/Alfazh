import Image from "next/image";
import Link from "next/link";

import { projects } from "./lib/lib";

import ProjectCard from "@/app/components/project/project-card";
import TechStack from "./components/tech-stack";
import Hobby from "./components/card-hobby";
import clsx from "clsx";


export default function Home() {

    return (
        <main className="flex flex-col mb-10 lg:px-8">
                <div className="flex flex-col justify-center gap-8 border-solid relative">
                    <header className="md:p-0 lg:p-8 p-4 h-80 flex flex-col justify-center mt-32">
                        <div className="flex flex-row items-center gap-4">
                            <Image
                                src="/author.jpg"
                                alt="me"
                                width={40}
                                height={40}
                                className="rounded-full grayscale"/>
                            <p className="text-4xl font-bold italic">Ahmd Alfazh</p>
                        </div>
                        <div className="">
                            <h1 className="lg:text-7xl md:text-6xl sm:text-4xl text-4xl font-bold">
                                Front-end Developer<br/>
                                and Android Developer
                            </h1>
                        </div>
                        <Link href={'https://drive.google.com/file/d/1ter1oU36L7h_fN30iR1Jb_yBpd7hS4BX/view?usp=sharing'} className="border border-slate400 md:text-lg text-base px-2 py-1 w-fit rounded-md mt-2">
                            Resume
                        </Link>
                    </header>

                    <hr/>

                    <section className="md:p-0 ld:p-8 p-0 gap-4">
                        <h1 className="flex justify-center text-2xl font-bold">Tech stack</h1>
                        <TechStack />
                    </section>

                    <section className="flex flex-col gap-4 ">
                        <h1 className="flex justify-center text-2xl font-bold md:p-0 pt-8 px">Some Project</h1>
                        <div className="flex sm:flex-row gap-4 sm:pl-8 px-4 overflow-x-scroll flex-col scroll-m-0">
                            {projects.map((project, id) => (
                                <div key={id} className={`sm:w-96 w-full md:block ${id>1 ? 'hidden' : 'block'}`}>
                                    <ProjectCard key={id} {...project} />
                                </div>
                            ))}
                        </div>
                        <Link href={'/project'} className={clsx(
                            `md:hidden block mb-8 mx-4 p-4`,
                            `group flex justify-center items-center border rounded-lg border-x-slate400 border-y-slate300 dark:border-x-slate600 dark:border-y-slate400`,
                            `transition ease-in-out delay-150 duration-500`,
                            `font-bold text-lg`
                        )}>
                            See more Project
                        </Link>
                    </section>

                    <section className="flex flex-col items-center gap-12">
                        <h1 className="text-2xl font-bold md:p-0 pt-8 px-8">Hobbys</h1>
                        <Hobby/>
                    </section>
                </div>
            </main>
    )
}