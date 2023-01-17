import BookList from "@/features/books/book-list";
import usersServices from "@/utils/api/users-services";
import React from "react";

interface Iprops {
  params: {
    userId: string
  }
}


export default async function BooksPage(props: Iprops) {
  const { params } = props

  const user = await usersServices.findOne(params.userId, 'force-cache')
  const userBooks = await usersServices.findUserBooks(params.userId, 'no-cache')

  return (
    <main className='main-page-layout'>
      <section className='section-header'>
        <h1 className='section-header-h1'>
          Książki użytkownika { user.name } { user.surname } { user.class }
        </h1>
        <h2 className='section-header-h2'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium earum ipsam sequi similique dignissimos quidem perspiciatis. Nisi maxime non sunt unde delectus modi, porro quod earum tempora laudantium accusamus voluptatum?
        </h2>
      </section>

      <section className="section-elements-layout">
        <BookList books={userBooks}/>
      </section>
    </main>
  );
}
