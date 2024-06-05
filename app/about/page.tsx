import Image from "next/image";
import { Suspense } from "react";

export default function About() {
    return (
        <div className="px-8 pt-32 space-y-4 bg-white dark:bg-black100 bg-opacity-35 dark:bg-opacity-35 pb-20 rounded-md  backdrop-blur-xl">
            <h1 className="font-bold text-4xl">Hi Everyone</h1>
            <div className="lg:grid lg:grid-cols-2 flex flex-col-reverse rev mx-auto">
                <p className="md:text-lg text-base">
                    Hi everyone my name is Ahmd Mufahras Li Alfazh Assardew but
                    you can call me ALfazh, I&apos;m a Front-end Developer from
                    Sidoarjo and welcome to my website. currently i&apos;m
                    studying at State University of Surabaya. I have a passion
                    for web development and I love to create websites and web
                    applications. <br />
                    <br />
                    I have an interest in the field of Technology when I was in
                    high school where I used to participate in the informatics
                    competition, and when I entered college, to be precise in
                    the second semester I got advice from my friend to learn
                    about web development.
                    <br />
                    <br />I have experience in building websites using React,
                    NextJs, and TailwindCSS. I&apos;m always learning new things
                    and I&apos;m always looking for new challenges. I&apos;m
                    always looking for new opportunities to work on interesting
                    projects and to collaborate with other developers. I&apos;m
                    always looking for new opportunities to learn and grow as a
                    developer. I&apos;m always looking for new opportunities to
                    work on interesting projects and to collaborate with other
                    developers. I&apos;m always looking for new opportunities to
                    learn and grow as a developer.
                </p>
                <Suspense
                    fallback={
                        <div className="md:w-80 md:h-80 sm:w-56 sm:h-56 w-48 h-48 bg-slate400 flex justify-center items-center rounded-xl md:mx-auto mb-16 pt-8 text-xl font-semibold">
                            Loading..
                        </div>
                    }
                >
                    <div className="group flex justify-center items-center md:w-80 md:h-80 sm:w-56 sm:h-56 w-48 h-48 relative rounded-xl md:mx-auto mb-16 pt-8 resize">
                        <div className="w-40 right-0 bottom-0 md:h-64 sm:h-44 h-40 absolute bg-slate400 dark:bg-slate600 group-hover:origin-bottom-right group-hover:rotate-12 duration-300 ease-in-out rounded-lg opacity-40 blur-sm shadow-2xl drop-shadow-lg shadow-black dark:shadow-slate200"></div>
                        <div className="w-40 left-0 bottom-0 md:h-64 sm:h-44 h-40 absolute bg-slate400 dark:bg-slate600 group-hover:origin-bottom-left group-hover:-rotate-12 duration-300 ease-in-out rounded-lg opacity-40 blur-sm shadow-2xl drop-shadow-lg shadow-black dark:shadow-slate200"></div>
                        <Image
                            src="/author.jpg"
                            alt="alfazh"
                            width={300}
                            height={300}
                            className="rounded-lg md:w-80 md:h-80 sm:w-56 sm:h-56 w-48 h-48 absolute"
                        />
                    </div>
                </Suspense>
            </div>
        </div>
    );
}
