"use client";

import { featuresRoutes } from "@/utils/data/routes";
import Link from "next/link";
import React, { useEffect } from "react";
import Image from "next/image";
import { FeaturesTabsLayout } from "@/features/ui";
import { headersContent } from "@/utils/data/features-content";
import { io } from "socket.io-client";
import { useUser } from "@/utils/hooks";

export default function Page() {
  const { user } = useUser()
  useEffect(() => {
    const socket = io(process.env.NEXT_PUBLIC_SOCKET_URL || "http://localhost:1337", {
      transports: ['websocket', 'polling'],
    })
    console.log('socket ten nie', socket)
    console.log('dziaa?')
    socket.emit("beOnline", { userId: user?._id });
  }, [])
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
          <Link className="mt-8 button" href={route.route}>
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
