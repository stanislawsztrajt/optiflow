"use client";

import { errorAlert, successAlert } from "@/utils/helpers/sweet-alert";
import { Ierror } from "@/utils/types/api";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/utils/hooks";
import { IprivateLesson } from "../types";
import privateLessonsServices from "@/utils/api/private-lessons-services";

interface Iprops {
  currentPrivateLesson: IprivateLesson
}

const useEditPrivateLessonForm = (props:Iprops) => {
  const { currentPrivateLesson } = props
  const router = useRouter();
  const { user } = useUser()

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const editPrivateLessonInitialValues =  {
    ...currentPrivateLesson,
  }

  useEffect(() => {
    if(user && user?._id !== currentPrivateLesson.userId) router.back();
  }, [user]);

  const editPrivateLesson = async (values: IprivateLesson) => {
    setLoading(true);

    try {
      const updatedPrivateLesson: IprivateLesson = {
        ...values,
      };
      await privateLessonsServices.update(updatedPrivateLesson, currentPrivateLesson._id);

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
    editPrivateLesson,
    editPrivateLessonInitialValues
  };
};

export default useEditPrivateLessonForm;
