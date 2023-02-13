import { useState } from "react";
import { Ibook } from "../types";
import { Dispatch, SetStateAction } from "react";
import booksServices from "@/utils/api/books-services";

interface Iprops {
  setBooks: Dispatch<SetStateAction<Ibook[]>>
}

const useBookItem = (props:Iprops) => {
  const { setBooks } = props

  const initialDeleteBtnText:string = "Usuń"
  const [deleteBookBtnText, setDeleteBookBtnText] = useState(initialDeleteBtnText);
  const [btnConfirm, setBtnConfirm] = useState(false)

  const confirmDelete = (bookId:string) => {
    if(btnConfirm) {
      deleteBook(bookId)
      return
    }

    let secondsToConfirm = 5;
    setBtnConfirm(true)
    setDeleteBookBtnText(`Potwierdź (${secondsToConfirm})`)

    const confirmInterval = setInterval((i) => {
      setDeleteBookBtnText(`Potwierdź (${secondsToConfirm-1})`)
      secondsToConfirm--;
    }, 1000)

    setTimeout(() => {
      setDeleteBookBtnText(initialDeleteBtnText)
      setBtnConfirm(false)
      clearInterval(confirmInterval)
    }, 5000)
  }

  const deleteBook = async (bookId:string) => {
    await booksServices.remove(bookId)
    setBooks(books => books.filter(book => book._id !== bookId))
  }

  return {
    confirmDelete,
    deleteBookBtnText
  };
};

export default useBookItem;
