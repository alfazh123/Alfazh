import Link from "next/link";
import clsx from "clsx";
import { IoMdArrowBack } from "react-icons/io";

export const AboutButton = () => {
    return (
        <Link
            href="/about"
            className="about group my-4 border-solid border w-28 md:text-base text-sm justify-center text-center items-center dark:border-slate200 border-slate700 dark:hover:bg-white hover:bg-black hover:text-slate200 dark:hover:text-slate800 px-3 py-2 rounded-lg"
        >
            <span className="text-about group-hover:text-white dark:group-hover:text-black">
                About Me
            </span>
        </Link>
    );
};

export const ProjectButton = () => {
    return (
        <Link href={'/project'} 
            className="group dark:bg-slate700 bg-opacity-40 dark:bg-opacity-40 border-solid border border-slate800 dark:border-0 rounded-lg p-5 h-full flex flex-col justify-center items-center"
        >
            <h3 className="text-2xl font-semibold">More Project</h3>
            <p className="text-gray-500 text-center">
                In my Project Page
            </p>
            <p className="group-hover:underline">See more</p>
        </Link>
    );
};

export const BackToBlogButton = () => {
    return (
        <Link href={`/blog`} className="group relative flex w-48 md:sticky md:top-20 md:left-4 left-0">
            <span className={clsx(
                `absolute left-12 top-3 hidden z-10 w-48`,
                `group-hover:transition-all group-hover:translate-x-0 `,
                `md:group-hover:flex`
            )}>Back To Blog Page</span>

            <div className={clsx(
                    `w-12 h-12 rounded-full overflow-hidden ring-2 ring-slate400 flex items-center`,
                    `md:group-hover:transition-all md:group-hover:duration-300 md:group-hover:ease-in-out md:group-hover:w-48`,
                    `bg-slate200 dark:bg-black100`
                )}>
                <div className="dark:bg-slate900 dark:bg-opacity-20 bg-slate200 w-12 h-12 p-3 rounded-full">
                    <IoMdArrowBack className="text-2xl dark:text-white text-black100" />
                </div>
            </div>
        </Link>
    )
}