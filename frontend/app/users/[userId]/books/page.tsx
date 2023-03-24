"use client";

import BookList from "@/features/books/book-list";
import { Ibook } from "@/features/books/types";
import { FeaturesListLayout } from "@/features/ui";
import { Iuser } from "@/features/users/types";
import usersServices from "@/utils/api/users-services";
import { booksFilters } from "@/utils/data/filtering";
import { booksSortingConfig } from "@/utils/data/sorting";
import { useUser } from "@/utils/hooks";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface Iprops {
  params: {
    userId: string;
  };
}

export default function BooksPage(props: Iprops) {
  const { params } = props;
  const router = useRouter();
  const { user: User } = useUser();

  const [user, setUser] = useState<Iuser>();
  const [initialUserBooks, setInitialUserBooks] = useState<Ibook[]>([]);
  const [userBooks, setUserBooks] = useState<Ibook[]>([]);

  useEffect(() => {
    if (params.userId === User?._id) {
      router.push("/dashbaord");
    }

    const fetchData = async () => {
      const user = await usersServices.findOne(params.userId, "force-cache");
      if (!user.name) {
        router.back();
      }

      setUser(user);

      const userBooks = await usersServices.findUserBooks(
        params.userId,
        "no-cache"
      );

      setUserBooks(userBooks);
      setInitialUserBooks(userBooks);
    };
    fetchData();
  }, []);

  return (
    <FeaturesListLayout
      title={
        User?._id === params.userId
          ? "Twoje książki"
          : `Książki użytkownika ${user?.name ?? ""} ${user?.surname ?? ""} ${user?.class ?? ""}`
      }
      content={
        <BookList books={userBooks} setBooks={setUserBooks} />
      }
      elements={userBooks}
      initialElements={initialUserBooks}
      setElements={setUserBooks}
      sortingConfig={booksSortingConfig}
      filteringConfig={booksFilters}
    />
  );
}
