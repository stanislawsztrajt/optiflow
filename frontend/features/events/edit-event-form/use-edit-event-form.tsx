"use client";

import { uploadImages } from "@/utils/helpers/cloudinary";
import { errorAlert, successAlert } from "@/utils/helpers/sweet-alert";
import { Ierror } from "@/utils/types/api";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Ievent } from "../types";
import eventsServices from "@/utils/api/events-services";
import { useUser } from "@/utils/hooks";

interface Iprops {
  currentEvent: Ievent
}

const useEditEventForm = (props:Iprops) => {
  const { currentEvent } = props
  const router = useRouter();
  const { user } = useUser()

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [images, setImages] = useState([]);
  const [imagesUrls, setImagesUrls] = useState<string[]>([]);

  const editEventInitialValues =  {
    ...currentEvent,
    date: String(currentEvent.date).substring(0, 10),
    images: [...currentEvent.images],
  }

  useEffect(() => {
    if(user && user?._id !== currentEvent.userId) router.back();
  }, [user]);

  useEffect(() => {
    setImagesUrls([...currentEvent.images])
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

  const editEvent = async (values: Ievent) => {
    setLoading(true);

    try {
      let uploadedImages:string[] = await uploadImages(images as []);

      const updatedEvent: Ievent = {
        ...values,
        date: new Date(values.date),
        images: images.length > 0 ? uploadedImages : values.images,
      };
      await eventsServices.update(updatedEvent, currentEvent._id);

      successAlert("Twoje wydarzenie zostało zaktualizowane");
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
    editEvent,
    setImages,
    handleSetImages,
    images,
    imagesUrls,
    editEventInitialValues
  };
};

export default useEditEventForm;
