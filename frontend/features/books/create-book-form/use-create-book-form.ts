import booksServices from "@/utils/api/books-services"
import { useState } from "react"
import { Ibook } from "../types"

const useCreateBookForm = () => {
  const [error, setError] = useState<string | null>(null);
  
  const createBook = async (book: Ibook) => {
    try {
      const data: Ibook = await booksServices.create(book);
    } catch {
      setError('error')
    }
  }
  
  return {
    createBook
  }
}

export default useCreateBookForm