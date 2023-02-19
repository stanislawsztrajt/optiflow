"use client";

import { uploadImages } from "@/utils/helpers/cloudinary";
import { errorAlert, successAlert } from "@/utils/helpers/sweet-alert";
import { Ierror } from "@/utils/types/api";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { IlostItem } from "../types";
import lostItemsServices from "@/utils/api/lost-items-services";
import { useUser } from "@/utils/hooks";

interface Iprops {
  currentLostItem: IlostItem
}

const useEditLostItemForm = (props:Iprops) => {
  const { currentLostItem } = props
  const router = useRouter();
  const { user } = useUser()

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [images, setImages] = useState([]);
  const [imagesUrls, setImagesUrls] = useState<string[]>([]);

  const editLostItemInitialValues =  {
    name: currentLostItem.name,
    description: currentLostItem.description,
    foundLocation: currentLostItem.foundLocation,
    date: String(currentLostItem.date).substring(0, 10),
    images: [...currentLostItem.images],
    type: currentLostItem.type
  }

  useEffect(() => {
    if(user && user?._id !== currentLostItem.userId) router.back();
  }, [user]);

  useEffect(() => {
    setImagesUrls([...currentLostItem.images])
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

  const editLostItem = async (values: IlostItem) => {
    setLoading(true);

    try {
      let uploadedImages:string[] = await uploadImages(images as []);

      const updatedLostItem: IlostItem = {
        ...values,
        date: new Date(values.date),
        images: images.length > 0 ? uploadedImages : values.images,
      };
      await lostItemsServices.update(updatedLostItem, currentLostItem._id);

      successAlert("Twój zgubiony/znaleziony przedmiot został zaktualizowany");
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
    editLostItem,
    setImages,
    handleSetImages,
    images,
    imagesUrls,
    editLostItemInitialValues
  };
};

export default useEditLostItemForm;
