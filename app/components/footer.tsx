import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SocialMediaLink } from "@/util/type";

const links: SocialMediaLink[] =  [
    {
        href: "https://www.linkedin.com/in/ahmd-mufahras-li-alfazh-assardew-031a08255/",
        name: "Ahmd Mufahras Li Alfazh Assardew",
        icon: <FaLinkedin className="text-xl" />,
    },
    {
        href: "https://www.instagram.com/ahmd_alfazh/",
        name: "ahmd_afazh",
        icon: <FaInstagram className="text-xl" />,
    },
    {
        href: "https://github.com/alfazh123",
        name: "Github",
        icon: <FaGithub className="text-xl" />,
    },
];

export default function Footer() {
    return (
        <div>
            <div className="flex md:flex-row flex-col md:px-20 px-4 py-10 md:justify-between justify-center items-center">
                <h1 className="font-bold text-3xl flex md:mb-0 mb-5">.Alfazh</h1>
                <div className="items-center flex md:flex-row flex-col">
                    <p>Let&apos;s Get In Touch 👍 </p>
                    <ul className="justify-between flex">
                        {links.map(({ href, name, icon }) => (
                            <li key={`${href}${name}`}>
                                <a
                                    title={name}
                                    href={href}
                                    className="flex px-3 py-1 rounded-full"
                                    target="_blank"
                                >
                                    {icon}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="flex justify-center pb-4">
                <p className="text-slate700 dark:text-slate300">
                    &copy; 2024 Alfazh. All rights reserved.
                </p>
            </div>
        </div>
    );
}
