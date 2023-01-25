"use client";

import LostItemList from "@/features/lost-items/lost-item-list";
import { IlostItem } from "@/features/lost-items/types";
import FeaturesLayout from "@/features/ui/features-layout/features-layout";
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
  const [userLostItems, setUserLostuserLostItems] = useState<IlostItem[]>([]);

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
      setUserLostuserLostItems(userLostItems);
    };
    fetchData();
  }, []);

  return (
    <FeaturesLayout
      header={
        user?._id === params.userId
          ? "Twoje zgubione przedmioty"
          : `Zgubione przedmioty ${user?.name ?? ""} ${user?.surname ?? ""} ${
              user?.class ?? ""
            }`
      }
      subHeader={
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium earum ipsam sequi similique dignissimos quidem perspiciatis. Nisi maxime non sunt unde delectus modi, porro quod earum tempora laudantium accusamus voluptatum?"
      }
    >
      <LostItemList lostItems={userLostItems} />
    </FeaturesLayout>
  );
}
