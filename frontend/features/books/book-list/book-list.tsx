import React, { Dispatch, FC, SetStateAction } from "react";
import BookItem from "../book-item";
import { Ibook } from "../types";

interface Props {
  books: Ibook[];
  setBooks: Dispatch<SetStateAction<Ibook[]>>
}

const BookList: FC<Props> = ({ books, setBooks }) => {
  const booksMap = books.map((book) => {
    return (
      <BookItem
        key={book._id}
        book={book}
        setBooks={setBooks}
      />
    )
  });

  return (
    <div>
      {books.length > 0 ? (
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
