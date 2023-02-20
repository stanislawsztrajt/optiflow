import React, { Dispatch, FC, SetStateAction } from "react";
import { IlostItem } from "../types";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { pl } from "date-fns/locale";
import { placeholderImageUrl } from "@/utils/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import useLostItemItem from "./use-lost-item-item";
import { useUser } from "@/utils/hooks";
import { usePathname } from "next/navigation";
import { UsersEnum } from "@/features/users/types";

interface Props {
  lostItem: IlostItem;
  setLostItems: Dispatch<SetStateAction<IlostItem[]>>;
}

const LostItemItem: FC<Props> = ({ lostItem, setLostItems }) => {
  const { _id, name, images, date, foundLocation, type, userId } = lostItem;
  const { user } = useUser()
  const { confirmDelete, deleteLostItemBtnText } = useLostItemItem({ setLostItems })
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
          <h1 className="mt-4 text-xl text-gray-800 break-words">{name}</h1>
          <div className="flex flex-col justify-between mt-2 sm:items-end sm:flex-row">
            <div>
              <p className="text-lg font-medium text-gray-700">{type}</p>
              <p className="text-sm text-gray-500 ">
                {format(new Date(date), "PP", { locale: pl })}
                {foundLocation ? `, ${foundLocation}` : ""}
              </p>
            </div>

            <Link
              href={`lost-items/${_id}`}
              className="flex items-end justify-end text-red-500 underline hover:text-red-400"
              >
              Czytaj więcej
            </Link>
          </div>
        </div>
      </div>
      {
        user?.role === UsersEnum.ADMIN || (userId === user?._id && pathname?.includes(userId)) ?
          <div className='flex flex-col items-end justify-end pt-3 mt-5 border-t sm:flex-row'>
            <Link className="edit-button" href={`/lost-items/edit-lost-item/${_id}`}>
              <FontAwesomeIcon icon={faEdit} />
              <span className="ml-2">Edytuj</span>
            </Link>
            <button
              onClick={() => confirmDelete(_id)}
              type="button"
              className="w-60 delete-button"
            >
              <FontAwesomeIcon icon={faTrashCan} />
              <span className="ml-2">{deleteLostItemBtnText}</span>
            </button>
          </div>
          : null
      }
    </div>
  );
};

export default LostItemItem;
