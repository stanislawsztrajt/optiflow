"use client";

import { useState, useEffect } from "react";
import lostItemsServices from "@/utils/api/lost-items-services";
import LostItemList from "@/features/lost-items/lost-item-list";
import LostItemSearchInput from "@/features/lost-items/lost-item-search-input";
import { IlostItem } from "@/features/lost-items/types";
import { FeaturesItemsLayout } from "@/features/ui";

export default function LostItemsPage() {
  const [initialLostItems, setInitialLostItems] = useState<IlostItem[]>([]);
  const [lostItems, setlostItems] = useState<IlostItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    lostItemsServices.findAll().then((res) => {
      setlostItems(res);
      setInitialLostItems(res);
      setLoading(false);
    });
  }, []);

  return (
    <FeaturesItemsLayout
      title="Zgubione/znalezione przedmioty"
      searchInput={
        <LostItemSearchInput lostItems={initialLostItems} setLostItems={setlostItems} />
      }
      content={
        <LostItemList lostItems={lostItems} loading={loading} />
      }
    />
  );
}
