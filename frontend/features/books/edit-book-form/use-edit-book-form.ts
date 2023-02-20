"use client";

import { uploadImages } from "@/utils/helpers/cloudinary";
import { errorAlert, successAlert } from "@/utils/helpers/sweet-alert";
import { Ierror } from "@/utils/types/api";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Ibook } from "../types";
import { useUser } from "@/utils/hooks";
import booksServices from "@/utils/api/books-services";

interface Iprops {
  currentBook: Ibook
}

const useEditBookForm = (props:Iprops) => {
  const { currentBook } = props
  const router = useRouter();
  const { user } = useUser()

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [images, setImages] = useState([]);
  const [imagesUrls, setImagesUrls] = useState<string[]>([]);

  const editBookInitialValues =  {
    ...currentBook
  }

  useEffect(() => {
    if(user && user?._id !== currentBook.userId) router.back();
  }, [user]);

  useEffect(() => {
    setImagesUrls([...currentBook.images])
  }, []);

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

  const editBook = async (values: Ibook) => {
    setLoading(true);

    try {
      let uploadedImages:string[] = await uploadImages(images as []);

      const updatedBook: Ibook = {
        ...values,
        images: images.length > 0 ? uploadedImages : values.images,
      };
      await booksServices.update(updatedBook, currentBook._id);

      successAlert("Twoja oferta została zaktualizowana");
      router.push("/dashboard");
    } catch (err) {
      errorAlert("Problem z serverem... spróbuj ponownie później");
      console.error(err);
      const error = err as unknown as Ierror;
      setError(error.response.data.message);
    }

    setLoading(false);
  };

  return {
    loading,
    error,
    editBook,
    setImages,
    handleSetImages,
    images,
    imagesUrls,
    editBookInitialValues
  };
};

export default useEditBookForm;
