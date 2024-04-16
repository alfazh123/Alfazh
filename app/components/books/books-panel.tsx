"use client";

import Book from "@/app/components/books/book";
import { Lugrasimo, Source_Serif_4, IBM_Plex_Serif } from "next/font/google";

import { useState } from "react";
import { books } from "@/app/lib/lib";

const lugrasimo = Lugrasimo({ subsets: ["latin"], weight: ["400"] });
const sourceSerif = Source_Serif_4({ subsets: ["latin"], weight: ["400"] });
const ibmPlexSerif = IBM_Plex_Serif({ subsets: ["latin"], weight: ["400"] });

export default function BooksPanel() {
    const [active, setActive] = useState(1);
    return (
        <ul className="grid lg:grid-cols-3 sm:grid-cols-2 mt-10 gap-4">
            <li>
                <p
                    className={`w-full h-full italic text-3xl  ${ibmPlexSerif.className}`}
                >
                    Welcome to my Collection of Books,
                    <br /> click on the book to see
                </p>
            </li>
            {books.map((book, id) => (
                <li
                    key={book.id}
                    onClick={() => setActive(id)}
                    className={` cursor-pointer`}
                >
                    <Book
                        title={book.title}
                        src={book.image_url}
                        year={book.year}
                    />
                </li>
            ))}
        </ul>
    );
}
