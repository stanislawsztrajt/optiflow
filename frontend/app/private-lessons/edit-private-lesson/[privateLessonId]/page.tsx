"use client";

import { useEffect, useState } from "react";
import { IprivateLesson } from "@/features/private-lessons/types";
import privateLessonsServices from "@/utils/api/private-lessons-services";
import EditPrivateLessonForm from "@/features/private-lessons/edit-private-lesson-form";

interface Iprops {
  params: {
    privateLessonId: string;
  };
}

export default function EditPrivateLessonPage(props: Iprops) {
  const { params } = props;
  const [privateLesson, setPrivateLesson] = useState<IprivateLesson>();

  useEffect(() => {
    fetchPrivateLesson();
  }, []);

  const fetchPrivateLesson = async () => {
    const privateLesson: IprivateLesson = await privateLessonsServices.findOne(params.privateLessonId);
    setPrivateLesson(privateLesson);
  };

  return (
    <>
      {
        privateLesson ?
          <EditPrivateLessonForm currentPrivateLesson={privateLesson} />
        : null
      }
    </>
  );
}
