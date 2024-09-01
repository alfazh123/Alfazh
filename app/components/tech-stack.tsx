import { SiNextdotjs, SiMdx, SiNeo4J, SiRedux, SiTailwindcss, SiReact } from "react-icons/si";
import { TbBrandTailwind } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import Link from "next/link";
import { link } from "fs";

const techStack = [
    {
        label: "Next.js",
        link: "https://nextjs.org",
        icon: <SiNextdotjs className="md:text-5xl text-4xl" />,
    },
    {
        label: "MDX",
        link: "https://mdxjs.com",
        icon: <SiMdx className="md:text-5xl text-4xl" />,
    },
    {
        label: "Redux",
        link: "https://reduxjs.org",
        icon: <SiRedux className="md:text-5xl text-4xl" />,
    },
    {
        label: "TailwindCSS",
        link: "https://tailwindcss.com",
        icon: <SiTailwindcss className="md:text-5xl text-4xl" />,
    },
    {
        label: "React.js",
        link: "https://reactjs.org",
        icon: <SiReact className="md:text-5xl text-4xl" />,
    },
]

export default function TechStack() {
    return (

        <div className="flex flex-wrap gap-8">
            {techStack.map((tech, id) => (
                <div key={id} className="group w-16 h-16 flex flex-col justify-center items-center">
                    <p className="group-hover:-translate-y-4 transition-all duration-500 ease-in-out">
                        {tech.icon}
                    </p>
                    <Link href={tech.link} className="text-center bg-opacity-0 text-opacity-0 group-hover:bg-opacity-100 group-hover:text-opacity-100 dark:bg-opacity-0 dark:text-opacity-0 dark:group-hover:bg-opacity-100 dark:group-hover:text-opacity-100 transition-all duration-700 ease-in-out bg-slate900 text-slate100 dark:bg-slate100 dark:text-black100 hover:text-tosca100 dark:hover:text-tosca100 px-2 rounded-md">{tech.label}</Link>
                </div>
            ))}
        </div>
    );
}
