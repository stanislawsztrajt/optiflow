"use client";

import React, { useEffect, useState } from "react";
import { useUser } from "@/utils/hooks";
import FeaturesLayout from "@/features/ui/features-layout/features-layout";
import usersServices from "@/utils/api/users-services";
import { userFeaturesRoutes } from "@/utils/data/routes";
import Image from "next/image";
import Link from "next/link";
import { IuserInfoLength } from "@/features/users/types";

export default function DashboardPage() {
  const { user } = useUser();
  const [userInfoLength, setUserInfoLength] = useState<IuserInfoLength>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await usersServices.findUserAllInfoLength(
        user?._id as string,
        "force-cache"
      );
      setUserInfoLength(data);
    };
    fetchData();
  }, []);

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
              width={500}
              height={500}
              className="h-32 mt-8 "
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
    <FeaturesLayout
      header={`Witaj ${user?.name}!`}
      subHeader="Problemy, które do tej pory nie były uporządkowane i klarowne, teraz możesz rozwiązać"
    >
      {featuresList}
    </FeaturesLayout>
  );
}
