import React, { FC } from "react";
import { IlostItem } from "../types";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { pl } from "date-fns/locale";
import { placeholderImageUrl } from "@/utils/data";

interface Props {
  lostItem: IlostItem;
}

const LostItemItem: FC<Props> = ({ lostItem }) => {
  const { _id, name, images, date, foundLocation, type } = lostItem;

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
        <h1 className="mt-4 text-xl text-gray-800 break-words">{name}</h1>

        <div className="flex items-end justify-between mt-2">
          <div>
            <p className="text-lg font-medium text-gray-700">{type}</p>

            <p className="text-sm text-gray-500 ">
              {format(new Date(date), "PP", { locale: pl })}
              {foundLocation ? `, ${foundLocation}` : ""}
            </p>
          </div>

          <Link
            href={`lost-items/${_id}`}
            className="inline-block text-red-500 underline hover:text-red-400"
          >
            Czytaj więcej
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LostItemItem;
