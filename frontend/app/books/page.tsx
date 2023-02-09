"use client";

import { useState, useEffect } from "react";
import { Ibook } from "@/features/books/types";
import { FeaturesItemsLayout } from "@/features/ui";
import BookList from "@/features/books/book-list";
import booksServices from "@/utils/api/books-services";

export default function BooksPage() {
  const [initialBooks, setInitialBooks] = useState<Ibook[]>([]);
  const [books, setBooks] = useState<Ibook[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    booksServices.findAll().then((res) => {
      setBooks(res);
      setInitialBooks(res);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <FeaturesItemsLayout
        title="Książki"
        searchInput={
          <div></div>
        }
        content={
          <BookList books={books} loading={loading} />
        }
      />
    </>
  );
}
