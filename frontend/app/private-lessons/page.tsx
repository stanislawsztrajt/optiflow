"use client";

import { useState, useEffect } from "react";
import { IprivateLesson } from "@/features/private-lessons/types";
import privateLessonsServices from "@/utils/api/private-lessons-services";
import PrivateLessonList from "@/features/private-lessons/private-lesson-list/private-lesson-list";
import { FeaturesListLayout } from "@/features/ui";
import { privateLessonsSortingConfig } from "@/utils/data/sorting";

export default function PrivateLessonsPage() {
  const [initialPrivateLessons, setInitialPrivateLessons] = useState<IprivateLesson[]>([]);
  const [privateLessons, setPrivateLessons] = useState<IprivateLesson[]>([]);

  useEffect(() => {
    privateLessonsServices.findAll().then((res) => {
      setPrivateLessons(res);
      setInitialPrivateLessons(res);
    });
  }, []);

  return (
    <FeaturesListLayout
      title="Korepetycje"
      content={
        <PrivateLessonList privateLessons={privateLessons} setPrivateLessons={setPrivateLessons} />
      }
      elements={privateLessons}
      initialElements={initialPrivateLessons}
      setElements={setPrivateLessons}
      sortingConfig={privateLessonsSortingConfig}
    />
  );
}
