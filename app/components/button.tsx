import Link from "next/link";

export const AboutButton = () => {
    return (
        <Link
            href="/about"
            className="my-4 border-solid border w-28 md:text-base text-sm justify-center text-center items-center dark:border-slate200 border-slate700 dark:hover:bg-white hover:bg-black hover:text-slate200 dark:hover:text-slate800 px-3 py-2 rounded-lg"
        >
            About Me
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
                In mt Project Page
            </p>
            <p className="group-hover:underline">See more</p>
        </Link>
    );
};
