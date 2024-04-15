import Link from "next/link";
import { ReactElement } from "react";

interface HobbyProps {
    title: string;
    description: string;
    link: string;
    icon: ReactElement;
}

export default function CardHobby({
    title,
    description,
    link,
    icon,
}: HobbyProps) {
    return (
        <div className="group relative">
            <div className="w-48 h-56 dark:bg-slate600 bg-sand absolute rounded-md group-hover:-translate-x-2 group-hover:translate-y-2 transition ease-in-out duration-300"></div>
            <Link
                href={link}
                className="w-48 h-56 absolute rounded-md border-solid border border-slate600 bg-sand100 dark:bg-slate900 dark:border-slate200 hover:shadow-lg transition ease-in-out duration-700 group-hover:-translate-x-4 group-hover:translate-y-4"
            >
                <div className="mx-3 my-2">
                    <div className="flex justify-between">
                        <h3 className="text-2xl font-semibold">{title}</h3>
                        <div className="text-xl">{icon}</div>
                    </div>
                    <p className="text-gray-500">{description}</p>
                </div>
            </Link>
            <div className="w-48 h-56 dark:bg-slate400 bg-sand200 rounded-md"></div>
        </div>
    );
}
