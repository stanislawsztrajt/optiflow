import { Iuser } from "@/features/users/types";
import usersServices from "@/utils/api/users-services";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import UndrawBookLover from "@/assets/undraw/undraw_book_lover.svg";
import UndrawEvent from "@/assets/undraw/undraw_event.svg";
import UndrawLesson from "@/assets/undraw/undraw_lesson.svg";
import UndrawLost from "@/assets/undraw/undraw_lost.svg";
import { userFeaturesRoutes } from "@/utils/data/routes";

interface Iprops {
  params: {
    userId: string
  }
}


export default async function UserPage(props: Iprops) {
  const { params } = props

  const user = await usersServices.findOne(params.userId, 'force-cache')
  const userInfoLength = await usersServices.findUserAllInfoLength(params.userId, 'no-cache')

  const featuresList = userFeaturesRoutes(userInfoLength, user._id).map(route => {
    return (
      <div
        key={route.name}
        className="section-element w-96"
      >
        <h3 className="section-element-h3">
          { route.name }
        </h3>
        <Image loading='lazy' width={500} height={500} className='h-32 mt-8 ' src={route.image} alt='' />
        <p className='section-element-p'>
          { route.content }
        </p>
        <Link className="mt-8 button" href={route.route}>
          { route.viewName }
        </Link>
      </div>
    )
  })

  return (
    <main className='main-page-layout'>
      <section className='section-header'>
        <h1 className='section-header-h1'>
          { user.name } { user.surname } { user.class }
        </h1>
        <h2 className='section-header-h2'>
          Problemy, które do tej pory nie były uporządkowane i klarowne, teraz możesz rozwiązać
        </h2>
      </section>

      <section className="section-elements-layout">
        { featuresList }
      </section>
    </main>
  );
}
