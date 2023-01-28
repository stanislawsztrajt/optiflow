import React, { FC } from 'react'
import { Ievent } from '../types'
import Image from 'next/image'
import Link from 'next/link';
import { format } from 'date-fns'
import { pl } from 'date-fns/locale'
import { placeholderImageUrl } from '@/utils/data';

interface Props {
  event: Ievent;
}

const EventItem: FC<Props> = ({ event }) => {
  const {
    _id,
    title,
    images,
    date,
    location,
    price,
  } = event

  return (
    <div>
      <div className='relative h-64'>
        <Image
          src={`${images[0] || placeholderImageUrl}`}
          fill={true}
          loading='lazy'
          className="object-cover object-center w-full rounded-lg"
          alt=''
        />
      </div>

      <div>
        <h1 className="mt-4 text-xl text-gray-800 break-words">
          {title}
        </h1>

        <div className="flex items-end justify-between mt-2">
          <div>
            <p className="text-lg font-medium text-gray-700">
              { price ? `Opłata: ${price}zł` : "Za darmo" }
            </p>

            <p className="text-sm text-gray-500 ">{format(new Date(date), 'PP', {locale: pl})}, {location}</p>
          </div>

          <Link href={`events/${_id}`} className="inline-block text-red-500 underline hover:text-red-400">Czytaj więcej</Link>
        </div>
      </div>
    </div>
  );
};

export default EventItem
