'use client'

import booksServices from "@/utils/api/books-services"
import { errorAlert, successAlert } from "@/utils/helpers/sweet-alert";
import { Ierror } from "@/utils/types/api";
import { useState } from "react"
import { BookCategoryEnum, BookLookEnum, Ibook } from "../types"

const initialValues = {
  title: '',
  description: '',
  price: 0,
  category: BookCategoryEnum.MATH,
  look: BookLookEnum.GOOD
}

const useCreateBookForm = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [images, setImages] = useState([]);

  const createBook = async (values: Ibook) => {
    const book: Ibook = { ...values, images };
    setLoading(true)
    console.log(images)
    console.log(book)
    try {
      successAlert('Dodano twoją książkę')
      await booksServices.create(book);
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
    initialValues,
    createBook,
    setImages,
    images
  }
}

export default useCreateBookForm