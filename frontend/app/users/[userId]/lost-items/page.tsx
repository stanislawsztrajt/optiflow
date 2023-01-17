import BookList from "@/features/books/book-list";
import LostItemList from "@/features/lost-items/lost-item-list";
import usersServices from "@/utils/api/users-services";
import React from "react";

interface Iprops {
  params: {
    userId: string
  }
}


export default async function LostItemsPage(props: Iprops) {
  const { params } = props

  const user = await usersServices.findOne(params.userId, 'force-cache')
  const userLostItems = await usersServices.findUserLostItems(params.userId, 'no-cache')

  return (
    <main className='main-page-layout'>
      <section className='section-header'>
        <h1 className='section-header-h1'>
          Zgubione przedmioty użytkownika { user.name } { user.surname } { user.class }
        </h1>
        <h2 className='section-header-h2'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium nihil suscipit sit accusantium ea, porro minima sed, nisi ipsum consequuntur odit aut nemo labore cumque corrupti ex! Vel, veritatis quod.
        </h2>
      </section>

      <section className="section-elements-layout">
        <LostItemList lostItems={userLostItems}/>
      </section>
    </main>
  );
}
