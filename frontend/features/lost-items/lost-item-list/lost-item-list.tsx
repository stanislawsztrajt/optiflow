import React, { Dispatch, FC, SetStateAction } from "react";
import LostItemItem from "../lost-item-item";
import { IlostItem } from "../types";

interface Props {
  lostItems: IlostItem[];
  setLostItems: Dispatch<SetStateAction<IlostItem[]>>
}

const LostItemList: FC<Props> = ({ lostItems, setLostItems }) => {
  const lostItemsMap = lostItems.map((lostItem) => {
    return <LostItemItem key={lostItem._id} lostItem={lostItem} setLostItems={setLostItems} />;
  });

  return (
    <div>
      {lostItems.length > 0 ? (
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 xl:grid-cols-3">
          {lostItemsMap}
        </div>
      ) : (
        <div>
          <h2 className="text-4xl text-gray-500">
            Nie znaleziono żadnych zgubionych/znalezionych przedmiotów
          </h2>
        </div>
      )}
    </div>
  );
};

export default LostItemList;
