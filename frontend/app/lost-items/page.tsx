"use client";

import { useState, useEffect } from "react";
import lostItemsServices from "@/utils/api/lost-items-services";
import LostItemList from "@/features/lost-items/lost-item-list";
import { IlostItem } from "@/features/lost-items/types";
import { FeaturesListLayout } from "@/features/ui";
import { lostItemsSortingConfig } from "@/utils/data/sorting";
import { lostItemsFilters } from "@/utils/data/filtering";

export default function LostItemsPage() {
  const [initialLostItems, setInitialLostItems] = useState<IlostItem[]>([]);
  const [lostItems, setLostItems] = useState<IlostItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    lostItemsServices.findAll().then((res) => {
      setLostItems(res);
      setInitialLostItems(res);
      setLoading(false)
    });
  }, []);

  return (
    <FeaturesListLayout
      title="Zgubione/znalezione przedmioty"
      content={
        <LostItemList lostItems={lostItems} setLostItems={setLostItems} />
      }
      elements={lostItems}
      initialElements={initialLostItems}
      setElements={setLostItems}
      sortingConfig={lostItemsSortingConfig}
      filteringConfig={lostItemsFilters}
      loading={loading}
    />
  );
}
