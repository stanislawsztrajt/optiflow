"use client";

import booksServices from "@/utils/api/books-services";
import { uploadImages } from "@/utils/helpers/cloudinary";
import { errorAlert, successAlert } from "@/utils/helpers/sweet-alert";
import { Ierror } from "@/utils/types/api";
import { useEffect, useState } from "react";
import { Ibook } from "../types";
import { useRouter } from "next/navigation";
import { createBookInitialValues, createBookValidationSchema } from "./create-book-form-config";


const useCreateBookForm = () => {
  const router = useRouter();

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [images, setImages] = useState([]);
  const [imagesUrls, setImagesUrls] = useState<string[]>([]);

  useEffect(() => {
    setImagesUrls(
      images.map((image) => {
        return URL.createObjectURL(image);
      })
    );
  }, [images]);

  const handleSetImages = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImages(Array.from(e.target.files as unknown as []).splice(0, 3));
  };

  const createBook = async (values: Ibook) => {
    setLoading(true);

    try {
      const uploadedImages = await uploadImages(images as []);
      const book: Ibook = { ...values, images: uploadedImages };
      await booksServices.create(book);
      successAlert("Dodano twoją książkę");
      router.push('/dashboard')
    } catch (err) {
      errorAlert("Problem z serverem... spróbuj później");
      console.error(err);
      const error = err as unknown as Ierror;
      setError(error.response.data.message);
    }
    
    setLoading(false);
  };

  return {
    loading,
    error,
    initialValues: createBookInitialValues,
    validationSchema: createBookValidationSchema,
    createBook,
    setImages,
    handleSetImages,
    images,
    imagesUrls,
  };
};

export default useCreateBookForm;
