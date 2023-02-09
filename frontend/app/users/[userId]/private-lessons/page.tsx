"use client";

import PrivateLessonList from "@/features/private-lessons/private-lesson-list";
import { IprivateLesson } from "@/features/private-lessons/types";
import { FeaturesItemsLayout, Loading } from "@/features/ui";
import { Iuser } from "@/features/users/types";
import usersServices from "@/utils/api/users-services";
import { useRouter } from "next/navigation";
import React, { useEffect, useState, Suspense } from "react";

interface Iprops {
  params: {
    userId: string;
  };
}

export default function PrivateLessonsPage(props: Iprops) {
  const { params } = props;

  const router = useRouter();

  const [user, setUser] = useState<Iuser>();
  const [userPrivateLessons, setUserPrivateLessons] = useState<
    IprivateLesson[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      const user = await usersServices.findOne(params.userId, "force-cache");
      if (!user.name) {
        router.back();
      }

      setUser(user);
      const userPrivateLessons = await usersServices.findUserPrivateLessons(
        params.userId,
        "no-cache"
      );
      setUserPrivateLessons(userPrivateLessons);
    };
    fetchData();
  }, []);

  return (
    <FeaturesItemsLayout
      title={
        user?._id === params.userId
          ? "Twoje korepetycje"
          : `Korepetycje użytkownika ${user?.name ?? ""} ${user?.surname ?? ""} ${user?.class ?? ""}`
      }
      content={
        <Suspense fallback={<Loading />}>
          <PrivateLessonList privateLessons={userPrivateLessons} />
        </Suspense>
      }
      searchInput={<></>}
    />
  );
}
