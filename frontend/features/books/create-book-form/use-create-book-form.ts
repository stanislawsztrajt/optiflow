'use client'

import booksServices from "@/utils/api/books-services"
import { uploadImages } from "@/utils/helpers/cloudinary";
import { errorAlert, successAlert } from "@/utils/helpers/sweet-alert";
import { Ierror } from "@/utils/types/api";
import { title } from "process";
import { useState } from "react"
import { BookCategoryEnum, BookLookEnum, Ibook } from "../types"
import * as Yup from 'yup'

const initialValues = {
  title: '',
  description: '',
  price: 0,
  category: BookCategoryEnum.MATH,
  look: BookLookEnum.GOOD
}

const validationSchema = Yup.object({
  title: Yup.string()
    .min(5, 'Tytuł musi mieć conajmniej 5 znaków')
    .max(100 ,'Tytuł musi być krótszy niż 100 znaków')
    .required('Tytuł jest wymagany'),
  description: Yup.string()
    .min(5, 'Opis musi mieć conajmniej 5 znaków')
    .max(500 ,'Opis musi być krótszy niż 500 znaków')
    .required('Opis jest wymagany'),
  price: Yup.number()
    .max(10000000, 'Cena musi być mniejsza niż 10000000')
    .required('Cena jest wymagana'),
})

const useCreateBookForm = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [images, setImages] = useState([]);

  const createBook = async (values: Ibook) => {
    setLoading(true)

    try {
      const uploadedImages = await uploadImages(images as []);
      const book: Ibook = { ...values, images: uploadedImages };
      await booksServices.create(book);
      successAlert('Dodano twoją książkę')
    } catch (err) {
      errorAlert('Problem z serverem... spróbuj później')
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
    validationSchema,
    createBook,
    setImages,
    images
  }
}

export default useCreateBookForm