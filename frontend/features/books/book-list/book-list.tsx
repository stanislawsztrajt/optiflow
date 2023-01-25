import React, { FC } from "react";
import BookItem from "../book-item/book-item";
import { Ibook } from "../types";

interface Props {
  books: Ibook[];
}

const BookList: FC<Props> = ({ books }) => {
  return (
    <>
      {books.length === 0 ? (
        <div>Nie ma tutaj żadnych książek</div>
      ) : (
        <>
          {books.map((book) => {
            return <BookItem key={book._id} book={book} />;
          })}
        </>
      )}
    </>
  );
};

export default BookList;
