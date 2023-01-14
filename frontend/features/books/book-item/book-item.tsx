import React, { FC } from 'react'
import { Ibook } from '../types'

interface Props {
  book: Ibook
}

const BookItem: FC<Props> = ({ book }) => {
  return(
    <div>
      <div>
        { book.title }
      </div>
      <div>
        { book.description }
      </div>
      <div>
        { book.look }
      </div>
      <div>
        { book.category }
      </div>
      <div>
        { book.price }
      </div>
    </div>
  )
}

export default BookItem
  