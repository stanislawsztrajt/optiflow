"use client";

import { errorAlert, successAlert } from "@/utils/helpers/sweet-alert";
import { Ierror } from "@/utils/types/api";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  createPrivateLessonInitialValues,
  createPrivateLessonValidationSchema,
} from "./create-private-lesson-form-config";
import { IprivateLesson } from "../types";
import privateLessonsServices from "@/utils/api/private-lessons-services";

const useCreatePrivateLessonForm = () => {
  const router = useRouter();

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const createPrivateLesson = async (values: IprivateLesson) => {
    setLoading(true);

    try {
      await privateLessonsServices.create(values);

      successAlert("Dodano ofertę korepetycji");
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
    initialValues: createPrivateLessonInitialValues,
    validationSchema: createPrivateLessonValidationSchema,
    createPrivateLesson,
  };
};

export default useCreatePrivateLessonForm;
