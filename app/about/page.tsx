import Image from "next/image";
import { Suspense } from "react";
import authorImg from "/public/author.jpg"

export default function About() {
    return (
        <div className="px-8 sm:pt-32 pt-20 space-y-4 backdrop-blur-xl">
            {/*bg-white dark:bg-black100 bg-opacity-35 dark:bg-opacity-35 pb-20 rounded-md  */}
            <Suspense
                fallback={
                    <div className="md:w-80 md:h-80 sm:w-56 sm:h-56 w-16 h-16 bg-slate400 flex justify-center items-center sm:rounded-xl md:mx-auto sm:mb-4 pt-8 text-xl font-semibold rounded-full">
                        Loading..
                    </div>
                }
            >
                <div className="group flex justify-center items-center md:w-80 md:h-80 sm:w-56 sm:h-56 w-16 h-16 relative sm:rounded-xl rounded-full md:mx-auto sm:mb-4 resize">
                    <div className="w-40 right-0 bottom-0 md:h-64 sm:h-44 sm:block hidden absolute bg-slate400 dark:bg-slate600 group-hover:origin-bottom-right group-hover:rotate-12 duration-300 ease-in-out rounded-lg opacity-40 blur-sm shadow-2xl drop-shadow-lg shadow-black dark:shadow-slate200"></div>
                    <div className="w-40 left-0 bottom-0 md:h-64 sm:h-44 sm:block hidden absolute bg-slate400 dark:bg-slate600 group-hover:origin-bottom-left group-hover:-rotate-12 duration-300 ease-in-out rounded-lg opacity-40 blur-sm shadow-2xl drop-shadow-lg shadow-black dark:shadow-slate200"></div>
                    <Image
                        src={authorImg.src}
                        alt="alfazh"
                        width={300}
                        height={300}
                        loading={`lazy`}
                        placeholder={"blur"}
                        blurDataURL={authorImg.blurDataURL}
                        className="sm:rounded-lg md:w-80 md:h-80 sm:w-56 sm:h-56 w-16 h-16 rounded-full absolute"
                    />
                </div>
            </Suspense>
            <h1 className="font-bold md:text-4xl text-3xl">Hi Everyone</h1>
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
            </div>
        </div>
    );
}
