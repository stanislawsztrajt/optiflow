"use client";

import { Ievent } from "@/features/events/types";
import eventsServices from "@/utils/api/events-services";
import Link from "next/link";
import { format } from "date-fns";
import { pl } from "date-fns/locale";
import { useEffect, useState } from "react";
import { placeholderImageUrl } from "@/utils/data";
import { ImagesCarousel } from "@/features/ui";
import { Iuser } from "@/features/users/types";
import usersServices from "@/utils/api/users-services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-regular-svg-icons";

interface Iprops {
  params: {
    eventId: string;
  };
}

export default function EventPage(props: Iprops) {
  const { params } = props;
  const [event, setEvent] = useState<Ievent>();
  const [eventUser, setEventUser] = useState<Iuser>();

  useEffect(() => {
    fetchEventData();
  }, []);

  const fetchEventData = async () => {
    const event: Ievent = await eventsServices.findOne(params.eventId);
    const eventUser: Iuser = await usersServices.findOne(event.userId)

    if (event.images.length === 0) event.images = [placeholderImageUrl];

    setEvent(event);
    setEventUser(eventUser);
  };

  return (
    <>
      {event && eventUser ? (
        <div className="mt-32">
          <div className="w-11/12 mx-auto sm:w-4/5 lg:w-3/5 2xl:w-2/5">
            <ImagesCarousel images={event.images} />
            <div className="grid grid-cols-1 gap-2 px-2 my-5 lg:px-10">
              <h1 className="text-2xl font-semibold lg:text-3xl">
                {event.title}
              </h1>
              <p className="text-gray-500 ">
                {format(new Date(event.date), "PP", { locale: pl })}, {event.location}
              </p>
              <p className="text-2xl font-medium">
                {event.price ? `Opłata: ${event.price}zł` : "Za darmo"}
              </p>
              <p className="text-lg"> {event.description}</p>
              <div className='flex items-center justify-between w-full px-3 py-2 mt-4 border rounded-md'>
                <Link
                  className='text-xl'
                  href={`users/${eventUser._id}`}
                >
                  {eventUser.name} {eventUser.surname}, {eventUser.class}
                </Link>
                <Link
                  className='font-semibold text-red-500'
                  href={`chat/${eventUser._id}`}
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
