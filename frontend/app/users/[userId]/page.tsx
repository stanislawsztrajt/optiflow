"use client";

import usersServices from "@/utils/api/users-services";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { userFeaturesRoutes } from "@/utils/data/routes";
import FeaturesLayout from "@/features/ui/features-layout";
import { useRouter } from "next/navigation";
import { Iuser, IuserInfoLength } from "@/features/users/types";

interface Iprops {
  params: {
    userId: string;
  };
}

export default function UserPage(props: Iprops) {
  const { params } = props;
  const router = useRouter()

  const [user, setUser] = useState<Iuser>();
  const [userInfoLength, setUserInfoLength] = useState<IuserInfoLength>({
    books: 0,
    events: 0,
    lostItems: 0,
    privateLessons: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      const user = await usersServices.findOne(params.userId, "force-cache");
      if (!user.name) {
        router.back();
      }

      setUser(user);
      const userInfoLength = await usersServices.findUserAllInfoLength(
        params.userId,
        "no-cache"
      );
      setUserInfoLength(userInfoLength);
    };
    fetchData();
  }, []);

  const featuresList = userFeaturesRoutes(
    userInfoLength,
    user?._id as string
  ).map((route) => {
    return (
      <div key={route.name} className="section-element w-96">
        <h3 className="section-element-h3">{route.name}</h3>
        <Image
          loading="lazy"
          width={150}
          height={150}
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
  });

  return (
    <FeaturesLayout
      header={`${user?.name ?? ''} ${user?.surname ?? ''} ${user?.class ?? ''}`}
      subHeader="Funkcjonalności, które do tej pory nie były uporządkowane, możesz teraz znaleźć w jednym miejscu."
    >
      {featuresList}
    </FeaturesLayout>
  );
}
