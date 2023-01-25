"use client";

import BookList from "@/features/books/book-list";
import { Ibook } from "@/features/books/types";
import FeaturesLayout from "@/features/ui/features-layout";
import { Iuser } from "@/features/users/types";
import usersServices from "@/utils/api/users-services";
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
    };
    fetchData();
  }, []);

  return (
    <FeaturesLayout
      header={`Książki użytkownika ${user?.name ?? ""} ${user?.surname ?? ""} ${
        user?.class ?? ""
      }`}
      subHeader={
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium earum ipsam sequi similique dignissimos quidem perspiciatis. Nisi maxime non sunt unde delectus modi, porro quod earum tempora laudantium accusamus voluptatum?"
      }
    >
      <BookList books={userBooks} />
    </FeaturesLayout>
  );
}
