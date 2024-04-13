"use client";

import Book from "@/app/components/books/book";
import { useState } from "react";
import { books } from "@/app/lib/lib";

export default function BooksPanel() {
    const [active, setActive] = useState(1);
    return (
        <ul className="flex relative md:flex-row flex-col md:gap-1 gap-4">
            {books.map((book, id) => (
                <li
                    key={book.id}
                    onClick={() => setActive(id)}
                    className={` cursor-pointer md:w-[8%] 
                        md:[transition:width_var(--transition,200ms_ease-in)] md:hover:w-[20%]
                        `}
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
