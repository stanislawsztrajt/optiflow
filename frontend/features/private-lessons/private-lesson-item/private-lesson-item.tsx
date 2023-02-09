import Link from "next/link";
import React, { FC } from "react";
import { IprivateLesson } from "../types";

interface Props {
  privateLesson: IprivateLesson;
}

const PrivateLessonItem: FC<Props> = ({ privateLesson }) => {
  const { _id, title, category, offerType, price } = privateLesson

  return (
    <div>
      <div className="flex flex-col justify-between p-4 border rounded-md">
        <h1 className="text-xl text-gray-800 break-words">{title}</h1>
        <p className="text-sm text-gray-500">
          { offerType }
        </p>

        <div className="flex items-end justify-between mt-2">
          <div>
            <p className="text-lg font-medium text-gray-700">
              {price ? `${price}zł/godz` : "Za darmo"}
            </p>

            <p className="text-sm text-gray-500">
              { category }
            </p>
          </div>
          <Link
            href={`private-lessons/${_id}`}
            className="inline-block text-red-500 underline hover:text-red-400 whitespace-nowrap"
          >
            Czytaj więcej
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivateLessonItem;
