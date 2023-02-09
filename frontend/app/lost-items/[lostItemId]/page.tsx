"use client";

import { IlostItem } from "@/features/lost-items/types";
import lostItemsServices from "@/utils/api/lost-items-services";
import { format } from "date-fns";
import { pl } from "date-fns/locale";
import { useEffect, useState } from "react";
import { placeholderImageUrl } from "@/utils/data";
import { ImagesCarousel } from "@/features/ui";
import Link from "next/link";
import { Iuser } from "@/features/users/types";
import usersServices from "@/utils/api/users-services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-regular-svg-icons";

interface Iprops {
  params: {
    lostItemId: string;
  };
}

export default function LostItemPage(props: Iprops) {
  const { params } = props;
  const [lostItem, setLostItem] = useState<IlostItem>();
  const [lostItemUser, setLostItemUser] = useState<Iuser>();

  useEffect(() => {
    fetchLostItem();
  }, []);

  const fetchLostItem = async () => {
    const lostItem: IlostItem = await lostItemsServices.findOne(params.lostItemId);
    const lostItemUser: Iuser = await usersServices.findOne(lostItem.userId);

    if (lostItem.images.length === 0) lostItem.images = [placeholderImageUrl];

    setLostItem(lostItem);
    setLostItemUser(lostItemUser);
  };

  return (
    <>
      {lostItem && lostItemUser ? (
        <div className="mt-32">
          <div className="w-11/12 mx-auto sm:w-4/5 lg:w-3/5 2xl:w-2/5">
            <ImagesCarousel images={lostItem.images} />
            <div className="grid grid-cols-1 gap-2 px-2 my-5 lg:px-10">
              <h1 className="text-2xl font-semibold lg:text-3xl">
                {lostItem.name}
              </h1>
              <p className="text-gray-500 ">
                {format(new Date(lostItem.date), "PP", { locale: pl })}
                {lostItem.foundLocation ? `, ${lostItem.foundLocation}` : ""}
              </p>
              <p className="text-2xl font-medium">{lostItem.type}</p>
              <p className="text-lg"> {lostItem.description}</p>
              <div className='flex items-center justify-between w-full px-3 py-2 mt-4 border rounded-md'>
                <Link
                  className='text-xl'
                  href={`users/${lostItemUser._id}`}
                >
                  {lostItemUser.name} {lostItemUser.surname}, {lostItemUser.class}
                </Link>
                <Link
                  className='font-semibold text-red-500'
                  href={`chat/${lostItemUser._id}`}
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
