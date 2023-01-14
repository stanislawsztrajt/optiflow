import BookList from "@/features/books/book-list";
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
  const userBooks = await usersServices.findUserBooks(params.id, 'no-cache')

  return (
    <div className='mt-24'>
      <div>
        <h1>
          Książki { user.name } { user.surname }
        </h1>
        <div>
          <BookList books={userBooks}/>
        </div>
      </div>
    </div>
  );
}
