"use client";

import { uploadImages } from "@/utils/helpers/cloudinary";
import { errorAlert, successAlert } from "@/utils/helpers/sweet-alert";
import { Ierror } from "@/utils/types/api";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  createLostItemInitialValues,
  createLostItemValidationSchema,
} from "./create-lost-item-form-config";
import { IlostItem } from "../types";
import lostItemsServices from "@/utils/api/lost-items-services";

const useCreateEventForm = () => {
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

  const createEvent = async (values: IlostItem) => {
    setLoading(true);

    try {
      const uploadedImages = await uploadImages(images as []);
      const lostItem: IlostItem = {
        ...values,
        date: new Date(values.date),
        images: uploadedImages
      };
      console.log(lostItem)
      await lostItemsServices.create(lostItem);
      successAlert("Dodano zgłoszenie zgubionego przedmiotu");
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
    initialValues: createLostItemInitialValues,
    validationSchema: createLostItemValidationSchema,
    createEvent,
    setImages,
    handleSetImages,
    images,
    imagesUrls,
  };
};

export default useCreateEventForm;
