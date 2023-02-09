"use client";

import { featuresRoutes } from "@/utils/data/routes";
import Link from "next/link";
import React from "react";
import useOnlineUsers from "@/features/chat/online-users/use-online-users";
import Image from "next/image";
import { FeaturesTabsLayout } from "@/features/ui";

export default function Page() {
  useOnlineUsers();

  const routes = featuresRoutes.map((route) => {
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
        <Link className="mt-2 button-bg" href={route.createRoute}>
          {route.createName}
        </Link>
      </div>
    );
  });

  return (
    <FeaturesTabsLayout
      header="Wybierz, co Cię aktualnie interesuje"
      subHeader="Funkcjonalności, które do tej pory nie były uporządkowane, możesz teraz znaleźć w jednym miejscu."
    >
      {routes}
    </FeaturesTabsLayout>
  );
}
