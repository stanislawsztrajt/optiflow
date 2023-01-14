import PrivateLessonList from "@/features/private-lessons/private-lesson-list";
import usersServices from "@/utils/api/users-services";
import React from "react";

interface Iprops {
  params: {
    id: string
  }
}


export default async function Page(props: Iprops) {
  const { params } = props

  const user = await usersServices.findOne(params.id, 'force-cache')
  const userPrivateLessons = await usersServices.findUserPrivateLessons(params.id, 'no-cache')

  return (
    <div className='mt-24'>
      <PrivateLessonList privateLessons={userPrivateLessons} />
    </div>
  );
}
