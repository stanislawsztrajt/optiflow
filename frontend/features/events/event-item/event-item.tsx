import React, { FC } from 'react'
import { Ievent } from '../types'
import { formatDate } from "@/utils/helpers";
import Image from 'next/image'
import Link from 'next/link';
import { format } from 'date-fns'
import { pl } from 'date-fns/locale'

interface Props {
  event: Ievent;
}

const EventItem: FC<Props> = ({ event: { title, _id, images, date, location, price, description } }) => {
  return (
    <div>
      <div className='relative h-64'>
        <Image
          src={`${images[0]}`}
          fill={true}
          className="object-cover object-center w-full rounded-lg"
          alt=''
        />
      </div>

      <div className="mt-4">
        <h1 className="mt-4 text-xl text-gray-800">
          {title}
        </h1>

        <div className="flex items-end justify-between mt-2 sm:items-center">
          <div>
            <p className="text-lg font-medium text-gray-700">
              { price ? `Opłata: ${price}zł` : "Za darmo" }
            </p>

            <p className="text-sm text-gray-500 ">{format(new Date(date), 'PP', {locale: pl})} | {location}</p>
          </div>

          <Link href={`event/${_id}`} className="inline-block text-red-500 underline hover:text-red-400">Czytaj więcej</Link>
        </div>
      </div>
    </div>
  );
};

export default EventItem
