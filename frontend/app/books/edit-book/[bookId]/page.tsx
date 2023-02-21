"use client";

import { useEffect, useState } from "react";
import EditBookForm from "@/features/books/edit-book-form/edit-book-form";
import { Ibook } from "@/features/books/types";
import booksServices from "@/utils/api/books-services";

interface Iprops {
  params: {
    bookId: string;
  };
}

export default function EditBookPage(props: Iprops) {
  const { params } = props;
  const [book, setBook] = useState<Ibook>();

  useEffect(() => {
    fetchBook();
  }, []);

  const fetchBook = async () => {
    const book: Ibook = await booksServices.findOne(params.bookId);
    setBook(book);
  };

  return (
    <>
      {
        book ?
          <EditBookForm currentBook={book} />
        : null
      }
    </>
  );
}
