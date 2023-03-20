"use client";

import { useState, useEffect } from "react";
import { Ibook } from "@/features/books/types";
import { FeaturesListLayout } from "@/features/ui";
import BookList from "@/features/books/book-list";
import booksServices from "@/utils/api/books-services";
import { booksSortingConfig } from "@/utils/data/sorting";
import { booksFilters } from "@/utils/data/filtering";

export default function BooksPage() {
  const [initialBooks, setInitialBooks] = useState<Ibook[]>([]);
  const [books, setBooks] = useState<Ibook[]>([]);

  useEffect(() => {
    booksServices.findAll().then((res) => {
      setBooks(res);
      setInitialBooks(res);
    });
  }, []);

  return (
    <>
      <FeaturesListLayout
        title="Książki"
        content={
          <BookList books={books} setBooks={setBooks} />
        }
        elements={books}
        initialElements={initialBooks}
        setElements={setBooks}
        sortingConfig={booksSortingConfig}
        filteringConfig={booksFilters}
      />
    </>
  );
}
