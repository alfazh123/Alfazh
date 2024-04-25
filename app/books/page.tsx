import BooksPanel from "@/app/components/books/books-panel";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Books",
};

export default function Books() {
    return (
        <div className="px-8 pt-32">
            <h1 className="font-bold text-4xl">Books</h1>
            <BooksPanel />
        </div>
    );
}
