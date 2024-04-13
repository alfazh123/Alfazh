"use client";

import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";

interface HobbyProps {
    title: string;
    description: string;
    image: string;
    link: string;
    icon: ReactElement;
}

export default function CardHobby({
    title,
    description,
    image,
    link,
    icon,
}: HobbyProps) {
    return (
        <Link
            href={link}
            className="w-48 h-56 rounded-md border-solid border border-slate600"
        >
            <div className="mx-3 my-2">
                <div className="flex justify-between">
                    <h3 className="text-2xl font-semibold">{title}</h3>
                    <div className="text-xl">{icon}</div>
                </div>
                <p className="text-gray-500">{description}</p>
            </div>
        </Link>
    );
}
