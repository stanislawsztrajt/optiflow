import { Ibook } from "@/features/books/types";
import booksServices from "@/utils/api/books-services";

interface Iprops {
  params: {
    bookId: string
   }
}

export default async function BookPage(props:Iprops) {
  const { params } = props
  const book:Ibook = await booksServices.findOne(params.bookId)

  return <>
    <div>
      <p>{book.title}</p>
      <p>{book.category}</p>
      <p>{book.look}</p>
      <p>{book.price}zł</p>
    </div>
  </>;
}
