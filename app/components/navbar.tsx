import Link from "next/link";
import ThemeButton from "./theme-button";

const links = [
    {
        href: "/",
        label: "Home",
    },
    {
        href: "/blog",
        label: "Blog",
    },
    {
        href: "/project",
        label: "Project",
    },
    {
        href: "/about",
        label: "About",
    },
];

export default function Navbar() {
    return (
        <div className="fixed flex justify-between w-full backdrop-blur-md z-10 lg:max-w-[1600px]">
            <ul className="md:px-16 flex px-4 py-5 justify-center items-center">
                {links.map(({ href, label }) => (
                    <li key={`${href}${label}`}>
                        <Link href={href}>
                            <p className="hover:underline px-3 md:text-base sm:text-sm text-xs">
                                {label}
                            </p>
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="flex md:px-16 px-4 py-5">
                <ThemeButton />
            </div>
        </div>
    );
}
