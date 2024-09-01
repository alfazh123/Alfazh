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
        <Link href={`/blog`} className="group md:relative flex w-52 md:top-4 md:left-4 left-0 overflow-hidden">
            <span className={`absolute left-12 top-3 z-10 w-48 bg-opacity-0 -translate-x-48 group-hover:translate-x-0 transition-all group-hover:duration-1000 ease-in-out text-black100 dark:text-slate100 rounded-md overflow-hidden`}>Back To Blog Page</span>

            <div className={clsx(
                    `w-12 h-12 rounded-full overflow-hidden flex items-center`,
                    `transition-all duration-500 ease-in-out md:group-hover:w-52`,
                    `lg:bg-slate100 lg:dark:bg-black100 lg:bg-opacity-65 bg-opacity-100 border border-b-2 border-r-0 border-l-0 border-t-0 border-slate300 dark:border-b-slate900`
                )}>
                <div className="w-12 h-12 p-3 rounded-full bg-slate100 dark:bg-black100 z-20">
                    <IoMdArrowBack className="text-2xl dark:text-white text-black100" />
                </div>
            </div>
            {/* <div className="w-12 h-12 rounded-full overflow-hidden flex items-center transition-all duration-1000 ease-in-out md:group-hover:w-48 bg-slate400">
                <div className="w-12 h-12 p-3 rounded-full">
                    <IoMdArrowBack className="text-2xl dark:text-white text-black100" />
                </div>
            </div> */}
        </Link>
    )
}