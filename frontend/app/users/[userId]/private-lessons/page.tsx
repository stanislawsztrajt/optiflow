import BookList from "@/features/books/book-list";
import PrivateLessonList from "@/features/private-lessons/private-lesson-list";
import usersServices from "@/utils/api/users-services";
import React from "react";

interface Iprops {
  params: {
    userId: string
  }
}


export default async function PrivateLessonsPage(props: Iprops) {
  const { params } = props

  const user = await usersServices.findOne(params.userId, 'force-cache')
  const userPrivateLessons = await usersServices.findUserPrivateLessons(params.userId, 'no-cache')

  return (
    <main className='main-page-layout'>
      <section className='section-header'>
        <h1 className='section-header-h1'>
          Korepetycje { user.name } { user.surname } { user.class }
        </h1>
        <h2 className='section-header-h2'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum impedit ad doloremque amet exercitationem placeat eos minima provident culpa vitae molestiae, iusto quisquam est. Quam possimus eveniet est tempora accusamus.
        </h2>
      </section>

      <section className="section-elements-layout">
        <PrivateLessonList privateLessons={userPrivateLessons}/>
      </section>
    </main>
  );
}
