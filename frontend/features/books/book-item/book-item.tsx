import React, { Dispatch, FC, SetStateAction } from "react";
import { Ibook } from "../types";
import Image from "next/image";
import Link from "next/link";
import { placeholderImageUrl } from "@/utils/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faEdit } from "@fortawesome/free-regular-svg-icons";
import { useUser } from "@/utils/hooks";
import useBookItem from "./use-book-item";
import { usePathname } from "next/navigation";
import { UsersEnum } from "@/features/users/types";

interface Props {
  book: Ibook;
  setBooks: Dispatch<SetStateAction<Ibook[]>>
}

const BookItem: FC<Props> = ({ book, setBooks }) => {
  const { _id, title, category, publishingHouse, look, images, price, part, type, userId } = book;
  const { user } = useUser();
  const { confirmDelete, deleteBookBtnText } = useBookItem({ setBooks })
  const pathname = usePathname()

  return (
    <div>
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
      {
        (userId === user?._id && pathname?.includes(userId)) || user?.role === UsersEnum.ADMIN  ?
          <div className='flex flex-row items-end justify-end pt-3 mt-5 border-t'>
            <Link className="edit-button" href={`books/edit-book/${_id}`}>
              <FontAwesomeIcon icon={faEdit} />
              <span className="ml-2">Edytuj</span>
            </Link>
            <button
              onClick={() => confirmDelete(_id)}
              type="button"
              className="delete-button"
            >
              <FontAwesomeIcon icon={faTrashCan} />
              <span className="ml-2">{deleteBookBtnText}</span>
            </button>
          </div>
          : null
      }
    </div>
  );
};

export default BookItem;
