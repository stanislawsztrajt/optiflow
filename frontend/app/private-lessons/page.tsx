"use client";

import { useState, useEffect } from "react";
import { IprivateLesson } from "@/features/private-lessons/types";
import privateLessonsServices from "@/utils/api/private-lessons-services";
import PrivateLessonList from "@/features/private-lessons/private-lesson-list/private-lesson-list";
import { FeaturesListLayout } from "@/features/ui";

export default function PrivateLessonsPage() {
  const [initialPrivateLessons, setInitialPrivateLessons] = useState<IprivateLesson[]>([]);
  const [privateLessons, setPrivateLessons] = useState<IprivateLesson[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    privateLessonsServices.findAll().then((res) => {
      setPrivateLessons(res);
      setInitialPrivateLessons(res);
      setLoading(false);
    });
  }, []);

  return (
    <FeaturesListLayout
      title="Korepetycje"
      content={
        <PrivateLessonList privateLessons={privateLessons} setPrivateLessons={setPrivateLessons} />
      }
      elements={initialPrivateLessons}
      setElements={setPrivateLessons}
    />
  );
}
