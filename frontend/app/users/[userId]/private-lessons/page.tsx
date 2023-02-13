"use client";

import PrivateLessonList from "@/features/private-lessons/private-lesson-list";
import { IprivateLesson } from "@/features/private-lessons/types";
import { FeaturesListLayout } from "@/features/ui";
import { Iuser } from "@/features/users/types";
import usersServices from "@/utils/api/users-services";
import { useUser } from "@/utils/hooks";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface Iprops {
  params: {
    userId: string;
  };
}

export default function PrivateLessonsPage(props: Iprops) {
  const { params } = props;
  const router = useRouter();
  const { user: User } = useUser()

  const [user, setUser] = useState<Iuser>();
  const [userPrivateLessons, setUserPrivateLessons] = useState<IprivateLesson[]>([]);
  const [initialUserPrivateLessons, setInitialUserPrivateLessons] = useState<IprivateLesson[]>([]);

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
      setInitialUserPrivateLessons(userPrivateLessons);
    };
    fetchData();
  }, []);

  return (
    <FeaturesListLayout
      title={
        User?._id === params.userId
          ? "Twoje korepetycje"
          : `Korepetycje użytkownika ${user?.name ?? ""} ${user?.surname ?? ""} ${user?.class ?? ""}`
      }
      content={
        <PrivateLessonList privateLessons={userPrivateLessons} setPrivateLessons={setUserPrivateLessons} />
      }
      elements={initialUserPrivateLessons}
      setElements={setUserPrivateLessons}
    />
  );
}
