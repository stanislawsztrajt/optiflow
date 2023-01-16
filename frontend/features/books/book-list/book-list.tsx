import React, { FC } from 'react'
import BookItem from '../book-item/book-item'
import { Ibook } from '../types'

interface Props {
  books: Ibook[]
}

const BookList: FC<Props> = ({ books }) => {
  const booksList = books.map(book => {
    return (
      <BookItem key={book._id} book={book}/>
    )
  })

  return(
    <>
      { booksList }
    </>
  )
}

export default BookList
  