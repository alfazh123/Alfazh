import Link from "next/link";

export const AboutButton = () => {
    return (
        <Link href="/about" className="my-4">
            <button
                type="button"
                className=" border-solid border-2 dark:border-slate200 border-slate700 dark:hover:bg-slate200 hover:bg-slate700 hover:text-slate200 dark:hover:text-slate800 px-3 py-2 rounded-lg"
            >
                About Me
            </button>
        </Link>
    );
};

export const ProjectButton = () => {
    return (
        <Link href="/project">
            <div className="group dark:bg-slate600 border-solid border-2 border-slate800 dark:border-0 rounded-lg p-5 h-full flex flex-col justify-center items-center">
                <h3 className="text-2xl font-semibold">More Project</h3>
                <p className="text-gray-500 group-hover:underline">
                    You can see more project on my github
                </p>
                <p>See more</p>
            </div>
        </Link>
    );
};
