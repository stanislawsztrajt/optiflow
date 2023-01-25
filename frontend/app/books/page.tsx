import { Ibook } from "@/features/books/types";
import booksServices from "@/utils/api/books-services";
import Link from "next/link";

export default async function BooksPage() {
  const books: Ibook[] = await booksServices.findAll();

  const booksMap = books.map((book) => {
    return (
      <Link href={`books/${book._id}`}>
        <div className="mb-5">
          <p>{book.title}</p>
          <p>{book.category}</p>
          <p>{book.look}</p>
          <p>{book.price}zł</p>
        </div>
      </Link>
    );
  });

  return (
    <>
      <div className="flex flex-col">{booksMap}</div>
    </>
  );
}
