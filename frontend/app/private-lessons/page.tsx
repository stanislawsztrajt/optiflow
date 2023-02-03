"use client";

import { useState, useEffect } from "react";
import { IprivateLesson } from "@/features/private-lessons/types";
import privateLessonsServices from "@/utils/api/private-lessons-services";
import PrivateLessonList from "@/features/private-lessons/private-lesson-list/private-lesson-list";
import { FeaturesItemsLayout } from "@/features/ui";

export default function PrivateLessonsPage() {
  const [initialPrivateLessons, setInitialPrivateLessons] = useState<IprivateLesson[]>([]);
  const [privateLessons, setPrivateLessons] = useState<IprivateLesson[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    privateLessonsServices.findAll().then((res) => {
      setPrivateLessons(res);
      setPrivateLessons(res);
      setLoading(false);
    });
  }, []);

  return (
    <FeaturesItemsLayout
      title="Korepetycje"
      content={
        <PrivateLessonList privateLessons={privateLessons} loading={loading} />
      }
      searchInput={<div></div>}
    />
  );
}
