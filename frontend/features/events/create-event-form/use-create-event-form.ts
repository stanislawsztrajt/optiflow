"use client";

import { uploadImages } from "@/utils/helpers/cloudinary";
import { errorAlert, successAlert } from "@/utils/helpers/sweet-alert";
import { Ierror } from "@/utils/types/api";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  createEventInitialValues,
  createEventValidationSchema,
} from "./create-event-form-config";
import { Ievent } from "../types";
import eventsServices from "@/utils/api/events-services";

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

  const createEvent = async (values: Ievent) => {
    setLoading(true);

    try {
      const uploadedImages = await uploadImages(images as []);
      const event: Ievent = {
        ...values,
        date: new Date(values.date),
        price: values.price || 0,
        images: uploadedImages,
      };
      await eventsServices.create(event);
      successAlert("Dodano twoje wydarzenie");
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
    initialValues: createEventInitialValues,
    validationSchema: createEventValidationSchema,
    createEvent,
    setImages,
    handleSetImages,
    images,
    imagesUrls,
  };
};

export default useCreateEventForm;
