"use client";

import React, { Dispatch, FC, SetStateAction } from "react";
import { Ievent } from "../types";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { pl } from "date-fns/locale";
import { placeholderImageUrl } from "@/utils/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { useUser } from "@/utils/hooks";
import useEventItem from "./use-event-item";
import { usePathname } from "next/navigation";

interface Props {
  event: Ievent;
  setEvents: Dispatch<SetStateAction<Ievent[]>>
}

const EventItem: FC<Props> = ({ event, setEvents }) => {
  const { _id, title, images, date, location, price, userId } = event;
  const { user } = useUser();
  const { confirmDelete, deleteEventBtnText } = useEventItem({ setEvents })
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

          <div className="flex items-end justify-between mt-2">
            <div>
              <p className="text-lg font-medium text-gray-700">
                {price ? `Opłata: ${price}zł` : "Za darmo"}
              </p>

              <p className="text-sm text-gray-500 ">
                {format(new Date(date), "PP", { locale: pl })}, {location}
              </p>
            </div>
            <Link
              href={`events/${_id}`}
              className="inline-block text-red-500 underline hover:text-red-400"
              >
              Czytaj więcej
            </Link>
          </div>
        </div>
      </div>
      {
        userId === user?._id && pathname?.includes(userId) ?
          <div className='flex flex-row items-end justify-end pt-3 mt-5 border-t'>
            <button
              onClick={() => confirmDelete(_id)}
              type="button"
              className="delete-button"
            >
              <FontAwesomeIcon icon={faTrashCan} />
              <span className="ml-2">{deleteEventBtnText}</span>
            </button>
          </div>
          : null
      }
    </div>
  );
};

export default EventItem;
