'use client'

import booksServices from "@/utils/api/books-services"
import { errorAlert, successAlert } from "@/utils/helpers/sweet-alert";
import { Ierror } from "@/utils/types/api";
import { useState } from "react"
import { Ibook } from "../types"

const useCreateBookForm = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const createBook = async (book: Ibook) => {
    setLoading(true)
    errorAlert('guwno')
    try {
      await booksServices.create(book);
      successAlert('Dodano twoją książkę')
    } catch (err) {
      console.error(err)
      const error = err as unknown as Ierror
      setError(error.response.data.message)
    }
    setLoading(false)
  }

  return {
    loading,
    error,
    createBook
  }
}

export default useCreateBookForm