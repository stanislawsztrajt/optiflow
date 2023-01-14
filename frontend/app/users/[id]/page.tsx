import { Iuser } from "@/features/users/types";
import usersServices from "@/utils/api/users-services";
import React from "react";

interface Iprops {
  params: {
    id: string
  }
}


export default async function UserPage(props: Iprops) {
  const { params } = props

  const user = await usersServices.findOne(params.id, 'force-cache')
  const userInfoLength = await usersServices.findUserAllInfoLength(params.id, 'no-cache')

  return (
    <div className='mt-24'>
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
          { userInfoLength.books }
        </div>
        <div>
          events
          { userInfoLength.events }
        </div>
        <div>
          lost items
          { userInfoLength.lostItems }
        </div>
        <div>
          private lesson
          { userInfoLength.privateLessons }
        </div>
      </div>
    </div>
  );
}
