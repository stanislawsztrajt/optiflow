'use client'

import { featuresRoutes } from "@/utils/data/features-routes";
import Link from "next/link";
import React from "react";
import useOnlineUsers from "@/features/chat/online-users/use-online-users";
import Image from "next/image";

export default function Page() {
  useOnlineUsers()

  const routes = featuresRoutes.map((route) => {
    return (
      <div
        key={route.name}
        className="flex flex-col items-center p-6 duration-150 bg-white border w-96 md:w-80 rounded-input hover:text-color-primary hover:scale-105 hover:shadow-lg"
      >
        <h3 className="text-2xl font-medium">
          {route.name}
        </h3>
        <Image loading='lazy' width={500} height={500} className='h-32 mt-8 ' src={route.image.src} alt='' />
        <p className='mt-8 text-base font-light text-center text-gray-700'>
          {route.content}
        </p>
        <Link className="mt-8 button" href={route.mainRoute}>
          {route.viewName}
        </Link>
        <Link className="mt-2 button-bg" href={route.createRoute}>
          {route.createName}
        </Link>
      </div>
    );
  });

  return (
    <main className='w-full mt-24 lg:mt-36'>
      <div className='p-2 text-center'>
        <h1 className='text-5xl font-medium'>
          Wybierz co cie aktualnie interesuje
        </h1>
        <h2 className='font-light text-gray-600'>
          Problemy, które do tej pory nie były uporządkowane i klarowne, teraz możesz rozwiązać
        </h2>
      </div>
      <div className="flex flex-wrap items-center justify-center w-full gap-10 mt-8 lg:mt-12">
        {routes}
      </div>
    </main>
  );
}
