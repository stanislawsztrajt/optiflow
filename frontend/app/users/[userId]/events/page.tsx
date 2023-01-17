import EventList from "@/features/events/event-list";
import usersServices from "@/utils/api/users-services";
import React from "react";

interface Iprops {
  params: {
    userId: string
  }
}


export default async function EventsPage(props: Iprops) {
  const { params } = props

  const user = await usersServices.findOne(params.userId, 'force-cache')
  const userEvents = await usersServices.findUserEvents(params.userId, 'no-cache')

  return (
    <main className='main-page-layout'>
      <section className='section-header'>
        <h1 className='section-header-h1'>
          Wydarzenia użytkownika { user.name } { user.surname } { user.class }
        </h1>
        <h2 className='section-header-h2'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, unde, facere cumque quia quas, aspernatur repellendus cupiditate fugiat quidem possimus dicta vero saepe. Mollitia maxime non, rerum cumque similique eaque.
        </h2>
      </section>

      <section className="section-elements-layout">
        <EventList events={userEvents}/>
      </section>
    </main>
  );
}
