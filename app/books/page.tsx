import BooksPanel from "@/app/components/books/books-panel";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Books",
};

export default function Books() {
    return (
        <div className="md:px-8 px-4 md:pt-32 pt-20">
            <h1 className="font-bold text-4xl">Books</h1>
            <BooksPanel />
        </div>
    );
}
