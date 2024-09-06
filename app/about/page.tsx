import Image from "next/image";
import { SocialMediaLink } from "@/util/type";

import authorImg from "/public/author.jpg"
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { TextHighlight } from "../components/text";
import Section from "../components/about/fragment-section";
import Link from "next/link";

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

                <Section>
                    <Section.Header1>Hi Everyone</Section.Header1>
                    <Section.Paragraph>
                        My name Ahmd Mufahras Li Alfazh Assardew but You can call me Alfazh, I&apos;m a Undergraduate Informatic Engineer from State University of Surabaya. I&apos;m alsi a Front-end Developer, i have passion for web development, creating a technology that can help people, and learning about a new things.
                    </Section.Paragraph>
                </Section>

                <Section>
                    <Section.Header4>My Skills</Section.Header4>
                    <Section.Container>
                        <Section.Paragraph>
                            I have experience with the following technologies:
                        </Section.Paragraph>
                        <Section.List list={["HTML", "CSS", "Javascript", "React", "Next.js", "TailwindCSS", "Redux", "Node.js", "Firebase", "Git", "PostgresQL"]} />
                    </Section.Container>
                </Section>

                <Section>
                    <Section.Header4>What am I Interested</Section.Header4>
                    <Section.Paragraph>
                        I am interested in web development, especially in Front-end Development, I am also interested in learning about new technology. I am alsi interested to be an Ilustrator, i share about my art in my instagram account and on <Link href="art" className="font-bold underline underline-offset-0 hover:underline-offset-4 transition-all duration-700 ease-in-out">`Art & Photography Page`</Link>.
                    </Section.Paragraph>
                </Section>

            </article>

            {/* <div className="flip-card md:w-72 md:h-72 w-16 h-16">
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
            </div> */}
        </div>
    );
}
