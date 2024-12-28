import Image from "next/image";

import { projects } from "./lib/lib";

import ProjectCard from "@/app/components/project/project-card";
import TechStack from "./components/tech-stack";
import Hobby from "./components/card-hobby";


export default function Home() {

    return (
        <main className="flex flex-col mb-10 lg:px-8">
                <div className="flex flex-col justify-center gap-8 border-solid relative">
                    <header className="md:p-0 p-8 h-80 flex flex-col justify-center mt-32">
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
                    </header>

                    <hr/>

                    <section className="md:p-0 p-8 gap-4">
                        <h1 className="flex justify-center text-2xl font-bold">Tech stack</h1>
                        <TechStack />
                    </section>

                    <section className="flex flex-col gap-4 ">
                        <h1 className="flex justify-center text-2xl font-bold md:p-0 pt-8 px-8">Some Project</h1>
                        <div className="flex sm:flex-row gap-4 md:p-0 pb-8 sm:pl-8 px-8 overflow-x-scroll flex-col scroll-m-0">
                            {projects.map((project, id) => (
                                <div key={id} className="sm:w-96">
                                    <ProjectCard key={id} {...project} />
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="flex flex-col items-center gap-12">
                        <h1 className="text-2xl font-bold md:p-0 pt-8 px-8">Hobbys</h1>
                        <Hobby/>
                    </section>
                </div>
            </main>
    )
}