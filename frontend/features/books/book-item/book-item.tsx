import React, { FC } from "react";
import { Ibook } from "../types";
import Image from "next/image";
import Link from "next/link";
import { placeholderImageUrl } from "@/utils/data";

interface Props {
  book: Ibook;
}

const BookItem: FC<Props> = ({ book }) => {
  const { _id, title, category, publishingHouse, look, images, price, part, type } = book;

  return (
    <div>
      <div className="relative h-64">
        <Image
          src={`${images[0] || placeholderImageUrl}`}
          fill={true}
          loading="lazy"
          className="object-cover object-center w-full rounded-lg"
          alt=""
        />
      </div>

      <div className="flex flex-col justify-between">
        <h1 className="mt-4 text-xl text-gray-800 break-words">{title}</h1>
        <p className="text-sm text-gray-500 ">
          {category}, {publishingHouse}, cz. {part}
        </p>

        <div className="flex items-end justify-between mt-2">
          <div>
            <p className="text-lg font-medium text-gray-700">
              {price ? `${price}zł` : "Za darmo"}
            </p>
            <p className="text-sm text-gray-500 ">
              { type } | Stan: {look}
            </p>
          </div>
          <Link
            href={`books/${_id}`}
            className="inline-block text-red-500 underline hover:text-red-400"
          >
            Czytaj więcej
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
