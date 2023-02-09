"use client";

import { useEffect, useState } from "react";
import { Iuser } from "@/features/users/types";
import usersServices from "@/utils/api/users-services";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { Ibook } from "@/features/books/types";
import booksServices from "@/utils/api/books-services";
import { placeholderImageUrl } from "@/utils/data";
import { ImagesCarousel } from "@/features/ui";

interface Iprops {
  params: {
    bookId: string;
  };
}

export default function BookPage(props: Iprops) {
  const { params } = props;
  const [book, setBook] = useState<Ibook>();
  const [bookUser, setBookUser] = useState<Iuser>();

  useEffect(() => {
    fetchBookData();
  }, []);

  const fetchBookData = async () => {
    const book: Ibook = await booksServices.findOne(params.bookId);
    const bookUser: Iuser = await usersServices.findOne(book.userId)

    if (book.images.length === 0) book.images = [placeholderImageUrl];

    setBook(book);
    setBookUser(bookUser);
  };

  return (
    <>
      {book && bookUser ? (
        <div className="mt-32">
          <div className="w-11/12 mx-auto sm:w-4/5 lg:w-3/5 2xl:w-2/5">
            <ImagesCarousel images={book.images} />
            <div className="grid grid-cols-1 gap-2 px-2 my-5 lg:px-10">
              <h1 className="text-2xl font-semibold lg:text-3xl">
                {book.title}
              </h1>
              <p className="text-gray-500 ">
                {book.type} | Stan: {book.look}
              </p>
              <p className="text-gray-500 ">
                {book.category}, {book.publishingHouse}, cz. {book.part}
              </p>
              <p className="text-2xl font-medium">
                {book.price ? `Cena: ${book.price}zł` : "Za darmo"}
              </p>
              <p className="text-lg"> {book.description}</p>
              <div className='flex items-center justify-between w-full px-3 py-2 mt-4 border rounded-md'>
                <Link
                  className='text-xl'
                  href={`users/${bookUser._id}`}
                >
                  {bookUser.name} {bookUser.surname}, {bookUser.class}
                </Link>
                <Link
                  className='font-semibold text-red-500'
                  href={`chat/${bookUser._id}`}
                >
                  Skontakuj się
                  <FontAwesomeIcon className='ml-2' icon={faComment} />
                </Link>
              </div>
            </div>
          </div>
      </div>
      ) : (
        "Ładowanie"
      )}
    </>
  );
}
