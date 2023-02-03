"use client";

import LostItemList from "@/features/lost-items/lost-item-list";
import LostItemSearchInput from "@/features/lost-items/lost-item-search-input";
import { IlostItem } from "@/features/lost-items/types";
import { FeaturesItemsLayout } from "@/features/ui";
import { Iuser } from "@/features/users/types";
import usersServices from "@/utils/api/users-services";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface Iprops {
  params: {
    userId: string;
  };
}

export default function LostItemsPage(props: Iprops) {
  const { params } = props;
  const router = useRouter();

  const [user, setUser] = useState<Iuser>();
  const [userLostItems, setUserLostItems] = useState<IlostItem[]>([]);
  const [initialUserLostItems, setInitialUserLostItems] = useState<IlostItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const user = await usersServices.findOne(params.userId, "force-cache");
      if (!user.name) {
        router.back();
      }

      setUser(user);
      const userLostItems = await usersServices.findUserLostItems(
        params.userId,
        "no-cache"
      );
      setUserLostItems(userLostItems);
      setInitialUserLostItems(userLostItems);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <FeaturesItemsLayout
      title={
        user?._id === params.userId
          ? "Twoje zgubione przedmioty"
          : `Zgubione przedmioty ${user?.name ?? ""} ${user?.surname ?? ""} ${
              user?.class ?? ""
            }`
      }
      searchInput={
        <LostItemSearchInput lostItems={initialUserLostItems} setLostItems={setUserLostItems} />
      }
      content={
        <LostItemList lostItems={userLostItems} loading={loading} />
      }
    />
  );
}
