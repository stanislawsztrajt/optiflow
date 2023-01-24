"use client";

import EventList from "@/features/events/event-list";
import { Ievent } from "@/features/events/types";
import FeaturesLayout from "@/features/ui/features-layout";
import { Iuser } from "@/features/users/types";
import usersServices from "@/utils/api/users-services";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Iprops {
  params: {
    userId: string;
  };
}

export default function EventsPage(props: Iprops) {
  const { params } = props;
  const router = useRouter();

  const [user, setUser] = useState<Iuser>();
  const [userEvents, setUserEvents] = useState<Ievent[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const user = await usersServices.findOne(params.userId, "force-cache");
      if (!user.name) {
        router.back();
      }

      setUser(user);
      const userEvents = await usersServices.findUserEvents(
        params.userId,
        "no-cache"
      );
      setUserEvents(userEvents);
    };
    fetchData();
  }, []);

  return (
    <FeaturesLayout
      header={
        user?._id === params.userId
          ? "Twoje wydarzenia"
          : `Wydarzenia użytkownika ${user?.name ?? ""} ${
              user?.surname ?? ""
            } ${user?.class ?? ""}`
      }
      subHeader="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, unde, facere cumque quia quas, aspernatur repellendus cupiditate fugiat quidem possimus dicta vero saepe. Mollitia maxime non, rerum cumque similique eaque."
    >
      <EventList events={userEvents} />
    </FeaturesLayout>
  );
}
