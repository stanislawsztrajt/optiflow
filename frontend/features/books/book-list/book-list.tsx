import React, { FC } from "react";
import BookItem from "../book-item";
import { Ibook } from "../types";

interface Props {
  books: Ibook[];
  loading?: boolean;
}

const BookList: FC<Props> = ({ books, loading }) => {
  const booksMap = books.map((book) => {
    return <BookItem key={book._id} book={book} />;
  });

  return (
    <div>
      {books.length > 0 || loading ? (
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 xl:grid-cols-3">
          {booksMap}
        </div>
      ) : (
        <div>
          <h2 className="text-2xl text-gray-500 sm:text-4xl">
            Nie znaleziono żadnych książek
          </h2>
        </div>
      )}
    </div>
  );
};

export default BookList;
