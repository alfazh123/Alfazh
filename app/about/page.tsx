import Image from "next/image";
import { SocialMediaLink } from "@/util/type";

import authorImg from "/public/author.jpg"
import { FaGithub, FaLinkedin } from "react-icons/fa";

import TechStack from "../components/tech-stack";

const socialMedia: SocialMediaLink[] = [
    {
        name: "Github",
        href: "https://github.com/alfazh123",
        icon: <FaGithub/>
    },
    {
        name: "LinkedIn",
        href: "https://linkedin.com/in/ahmd-mufahras-li-alfazh-assardew",
        icon: <FaLinkedin/>
    },
]
export default function About() {
    return (
        <div className="px-8 pt-32 backdrop-blur-xl lg:grid lg:grid-cols-2 flex flex-col-reverse gap-10">
            {/*bg-white dark:bg-black100 bg-opacity-35 dark:bg-opacity-35 pb-20 rounded-md  */}
            <article className="space-y-8">
                <section className="space-y-4">
                    <h1 className="font-bold md:text-4xl text-3xl">Hi Everyone</h1>
                    <p className="md:text-xl text-lg">My name Ahmd Mufahras Li Alfazh Assardew but You can call me Alfazh, I&apos;m a Undergraduate Informatic Engineer from State University of Surabaya. I&apos;m alsi a Front-end Developer, i have passion for web development, creating a technology that can help people, and learning about a new things.</p>

                    <br/>

                    <p className="md:text-xl text-lg">I have an interest in the field of Technology when I was in high school where I used to participate in the informatics competition, and when I entered college, to be precise in the second semester I got advice from my friend to learn about web development</p>
                </section>

                <section className="space-y-4">
                    <h1 className="font-bold md:text-4xl text-3xl">My Journey</h1>
                    <p className="md:text-xl text-lg">I started my journey in web development in the second semester of college, I started learning about HTML, CSS, and Javascript, and I started to make a simple website, and I started to learn about the framework like React and Next.js</p>
                </section>
            </article>

            <div className="flip-card md:w-72 md:h-72 w-16 h-16">
                <div className="inner-card w-full h-full relative">
                    <div className="front flex justify-center items-center md:w-72 md:h-72 w-16 h-16 md:mx-auto md:mb-4 resize transition-all duration-700 ease-in-out absolute">
                        <Image
                            src={authorImg.src}
                            alt="alfazh"
                            width={300}
                            height={300}
                            loading={`lazy`}
                            placeholder={"blur"}
                            blurDataURL={authorImg.blurDataURL}
                            className="object-cover bg-cover md:rounded-xl rounded-full"
                            />
                    </div>
                    <ul className="back absolute w-full h-full md:flex hidden justify-center items-center text-center bg-slate300 dark:bg-slate900 bg-opacity-30 backdrop-blur-xl rounded-xl gap-8">
                        {socialMedia.map((social, id) => (
                            <li key={id}>
                                <a href={social.href} title={social.name} target="_blank" className="text-slate900 dark:text-slate200 text-4xl">
                                    {social.icon}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
