"use client";

import PrivateLessonList from "@/features/private-lessons/private-lesson-list";
import { IprivateLesson } from "@/features/private-lessons/types";
import { Loading } from "@/features/ui";
import FeaturesLayout from "@/features/ui/features-layout";
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
    <FeaturesLayout
      header={
        user?._id === params.userId
          ? "Twoje korepetycje"
          : `Korepetycje ${user?.name ?? ""} ${user?.surname ?? ""} ${
              user?.class ?? ""
            }`
      }
      subHeader={
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium earum ipsam sequi similique dignissimos quidem perspiciatis. Nisi maxime non sunt unde delectus modi, porro quod earum tempora laudantium accusamus voluptatum?"
      }
    >
      <Suspense fallback={<Loading />}>
        <PrivateLessonList privateLessons={userPrivateLessons} />
      </Suspense>
    </FeaturesLayout>
  );
}
