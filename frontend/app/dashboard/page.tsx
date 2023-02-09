"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useUser } from "@/utils/hooks";
import usersServices from "@/utils/api/users-services";
import { userFeaturesRoutes } from "@/utils/data/routes";
import { IuserInfoLength } from "@/features/users/types";
import { FeaturesTabsLayout } from "@/features/ui";

export default function DashboardPage() {
  const { user } = useUser();
  const [userInfoLength, setUserInfoLength] = useState<IuserInfoLength>();

  useEffect(() => {
    console.log(user)
    if (!user) return

    const fetchData = async () => {
      const data = await usersServices.findUserAllInfoLength(
        user?._id as string,
        "no-cache"
      );
      setUserInfoLength(data);
    };
    fetchData();
  }, [user]);

  const featuresList = userInfoLength
    ? userFeaturesRoutes(
        userInfoLength as IuserInfoLength,
        user?._id as string,
        false
      ).map((route) => {
        return (
          <div key={route.name} className="section-element w-96">
            <h3 className="section-element-h3">{route.name}</h3>
            <Image
              loading="lazy"
              width={150}
              height={150}
              className="h-32 mt-8"
              src={route.image}
              alt=""
            />
            <p className="section-element-p">{route.content}</p>
            <Link className="mt-8 button" href={route.route}>
              {route.viewName}
            </Link>
          </div>
        );
      })
    : null;

  return (
    <FeaturesTabsLayout
      header={`Witaj ${user?.name ?? ''}!`}
      subHeader="Funkcjonalności, które do tej pory nie były uporządkowane, możesz teraz znaleźć w jednym miejscu."
    >
      {featuresList}
    </FeaturesTabsLayout>
  );
}
