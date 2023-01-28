"use client";

import LostItemList from '@/features/lost-items/lost-item-list'
import { useState, useEffect } from "react";
import { IlostItem } from "@/features/lost-items/types";
import lostItemsServices from '@/utils/api/lost-items-services';
import LostItemSearchInput from '@/features/lost-items/lost-item-search-input';

export default function LostItemsPage() {
  const [initialLostItems, setInitialLostItems] = useState<IlostItem[]>([]);
  const [lostItems, setlostItems] = useState<IlostItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    lostItemsServices.findAll().then(res => {
      setlostItems(res)
      setInitialLostItems(res)
      setLoading(false)
    })
  }, [])


  return <>
    <section className="mt-24 bg-white">
      <div className="container px-6 py-10 mx-auto">
        <div className="flex flex-col justify-between sm:items-center sm:flex-row">
          <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl">Zgubione/znalezione przedmioty</h1>
          <LostItemSearchInput lostItems={initialLostItems} setLostItems={setlostItems} />
        </div>

        <hr className="my-8 border-gray-200" />

        <LostItemList lostItems={lostItems} loading={loading} />
      </div>
    </section>
  </>;
}