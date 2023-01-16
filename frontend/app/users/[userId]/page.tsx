import { Iuser } from "@/features/users/types";
import usersServices from "@/utils/api/users-services";
import Link from "next/link";
import React from "react";

interface Iprops {
  params: {
    userId: string
  }
}


export default async function UserPage(props: Iprops) {
  const { params } = props

  const user = await usersServices.findOne(params.userId, 'force-cache')
  const userInfoLength = await usersServices.findUserAllInfoLength(params.userId, 'no-cache')

  return (
    <div className='mt-36'>
      <div>
        <div>
          { user.name } { user.surname }
        </div>

        <div>
          { user.class }
        </div>
      </div>
      <div>
        <div>
          books
          <Link href={`/users/${params.userId}/books`}>
            <button className='button-bg'>
              Książki użytkownika
            </button>
          </Link>
          { userInfoLength.books }
        </div>
        <div>
          <Link href={`/users/${params.userId}/events`}>
            <button className='button-bg'>
              Wydarzenia użytkownika
            </button>
          </Link>
          { userInfoLength.events }
        </div>
        <div>
          <Link href={`/users/${params.userId}/lost-items`}>
          </Link>
          <button className='button-bg'>
            Zgubione przedmioty użytkownika
          </button>
          { userInfoLength.lostItems }
        </div>
        <div>
          <Link href={`/users/${params.userId}/private-lessons`}>
            <button className='button-bg'>
              Korepetycje użytkownika
            </button>
          /</Link>
          { userInfoLength.privateLessons }
        </div>
      </div>
    </div>
  );
}
