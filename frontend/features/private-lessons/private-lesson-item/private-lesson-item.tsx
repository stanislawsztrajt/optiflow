import { useUser } from "@/utils/hooks";
import React, { Dispatch, FC, SetStateAction } from "react";
import Link from "next/link";
import { IprivateLesson } from "../types";
import usePrivateLessonItem from "./use-private-lesson-item";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { UsersEnum } from "@/features/users/types";

interface Props {
  privateLesson: IprivateLesson;
  setPrivateLessons: Dispatch<SetStateAction<IprivateLesson[]>>
}

const PrivateLessonItem: FC<Props> = ({ privateLesson, setPrivateLessons }) => {
  const { _id, title, category, offerType, price, userId } = privateLesson
  const { user } =  useUser()
  const { confirmDelete, deletePrivateLessonBtnText } = usePrivateLessonItem({ setPrivateLessons })
  const pathname = usePathname()

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
      {
        (userId === user?._id && pathname?.includes(userId)) || user?.role === UsersEnum.ADMIN ?
          <div className='flex flex-row items-end justify-end mt-3'>
            <button
              onClick={() => confirmDelete(_id)}
              type="button"
              className="delete-button"
            >
              <FontAwesomeIcon icon={faTrashCan} />
              <span className="ml-2">{deletePrivateLessonBtnText}</span>
            </button>
          </div>
          : null
      }
    </div>
  );
};

export default PrivateLessonItem;
