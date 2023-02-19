"use client";

import { useEffect, useState } from "react";
import { IlostItem } from "@/features/lost-items/types";
import EditLostItemForm from "@/features/lost-items/edit-lost-item-form";
import lostItemsServices from "@/utils/api/lost-items-services";

interface Iprops {
  params: {
    lostItemId: string;
  };
}

export default function CreateLostItemPage(props: Iprops) {
  const { params } = props;
  const [lostItem, setLostItem] = useState<IlostItem>();

  useEffect(() => {
    fetchLostItem();
  }, []);

  const fetchLostItem = async () => {
    const lostItem: IlostItem = await lostItemsServices.findOne(params.lostItemId);
    setLostItem(lostItem);
  };

  return (
    <>
      {
        lostItem ?
          <EditLostItemForm currentLostItem={lostItem} />
        : null
      }
    </>
  )
}