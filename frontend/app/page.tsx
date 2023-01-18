'use client'

import { featuresRoutes } from "@/utils/data/routes";
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
        className="section-element"
      >
        <h3 className="section-element-h3">
          {route.name}
        </h3>
        <Image loading='lazy' width={500} height={500} className='h-32 mt-8 ' src={route.image.src} alt='' />
        <p className='section-element-p'>
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
    <main className='main-page-layout'>
      <section className='section-header'>
        <h1 className='section-header-h1'>
          Wybierz co Cię aktualnie interesuje
        </h1>
        <h2 className='section-header-h2'>
          Problemy, które do tej pory nie były uporządkowane i klarowne, teraz możesz rozwiązać
        </h2>
      </section>
      <section className="section-elements-layout">
        {routes}
      </section>
    </main>
  );
}
