"use client";

import { featuresRoutes } from "@/utils/data/routes";
import Link from "next/link";
import React from "react";
import useOnlineUsers from "@/features/chat/online-users/use-online-users";
import Image from "next/image";
import { FeaturesTabsLayout } from "@/features/ui";
import { headersContent } from "@/utils/data/features-content";

export default function Page() {
  useOnlineUsers();

  const routes = featuresRoutes.map((route) => {
    return (
      <div key={route.name} className="section-element w-96">
        <div className='section-element-box'>
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
        </div>
        <div className='section-element-box'>
          <Link className="mt-8 button" href={route.mainRoute}>
            {route.viewName}
          </Link>
          <Link className="mt-2 button-bg" href={route.createRoute}>
            {route.createName}
          </Link>
        </div>
      </div>
    );
  });

  return (
    <FeaturesTabsLayout
      header="Wybierz, co Cię aktualnie interesuje"
      subHeader={headersContent.homePage}
    >
      {routes}
    </FeaturesTabsLayout>
  );
}
