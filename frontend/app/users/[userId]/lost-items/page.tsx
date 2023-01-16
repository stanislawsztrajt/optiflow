import LostItemList from "@/features/lost-items/lost-item-list";
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
  const userLostItems = await usersServices.findUserLostItems(params.id, 'no-cache')

  return (
    <div className='mt-24'>
      <LostItemList lostItems={userLostItems} />
    </div>
  );
}
