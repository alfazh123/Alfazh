import { SocialMediaLink } from "@/util/type";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

import Link from "next/link";

import { experiences } from "../lib/lib";

const socialMedia: SocialMediaLink[] = [
    {
        name: "Github",
        href: "https://github.com/alfazh123",
        icon: <FaGithub/>
    },
    {
        name: "Linkedin",
        href: "https://linkedin.com/in/ahmd-mufahras-li-alfazh-assardew",
        icon: <FaLinkedin/>
    },
    {
        name: "Instagram",
        href: "https://instagram.com/ahmd_alfazh",
        icon: <FaInstagram/>
    }
]

export default function About() {
    return (
        <div className="px-8 md:pt-32 pt-20 backdrop-blur-xl">
            <article className="space-y-4 flex flex-col justify-center">
                
                <h1 className="font-bold text-3xl">Hi, Everyone</h1>

                <p>
                    I am Alfazh a Front-end Developer and third year Informatics student at the State University of Surabaya. I started my journey since entering the world of college, i learn C++, JavaScript, Python, and many more, then i started to learn about web development for college assigments & personal projects and then i start learning Android Development (Kotlin) in Bangkit Academy 2024 Batch 2.
                    <br/><br/>
                    I have experience in last year as Front-end Developer and Android Developer (Kotlin), I am also interested in being an illustrator, i share about my art on my instagram account and on the <Link href={'/art'} className="underline font-semibold"> Art & Photography Page.</Link>
                </p>

            </article>

            <section>
                <h2 className="font-bold text-2xl pt-8">Social Media</h2>
                <div className="flex flex-wrap gap-2 pt-4">
                    {socialMedia.map((social, index) => (
                        <Link key={index}  href={social.href} className="flex items-center text-4xl">
                            {social.icon}
                        </Link>
                    ))}
                </div>
            </section>

            <section>
                <h2 className="font-bold text-2xl pt-8">Experience</h2>
                <div className="flex flex-col gap-4 pt-4">
                    {experiences.map((experience, id) => (
                        <div key={id} className="flex flex-col gap-2 p-4 border border-slate400 rounded-md">
                            <h3 className="font-semibold italic text-xl">{experience.title}</h3>
                            <div className="flex md:flex-row flex-col justify-between">
                                <h4 className="italic">{experience.company}</h4>
                                <h4 className="italic">{experience.year}</h4>
                            </div>
                            <ul className="list-disc list-outside pl-4">
                                {experience.works.map((work, id) => (
                                    <li key={id} className="gap-2 list-disc">
                                        {work}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
