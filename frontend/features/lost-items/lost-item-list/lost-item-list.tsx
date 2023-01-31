import React, { FC } from "react";
import LostItemItem from "../lost-item-item";
import { IlostItem } from "../types";

interface Props {
  lostItems: IlostItem[];
  loading: boolean;
}

const EventList: FC<Props> = ({ lostItems, loading }) => {

  const lostItemsMap = lostItems.map(lostItem => {
    return (
      <LostItemItem key={lostItem._id} lostItem={lostItem} />
    )
  })

  return (
    <div>
      {
        lostItems.length > 0 || loading ?
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2 xl:grid-cols-3">
            {lostItemsMap}
          </div>
        :
          <div>
            <h2 className='text-4xl text-gray-500'>Nie znaleziono żadnych zgubionych/znalezionych przedmiotów</h2>
          </div>
      }
    </div>
  )
}

export default EventList;
