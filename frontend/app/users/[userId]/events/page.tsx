"use client";

import EventList from "@/features/events/event-list";
import { Ievent } from "@/features/events/types";
import { Iuser } from "@/features/users/types";
import usersServices from "@/utils/api/users-services";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FeaturesListLayout } from "@/features/ui";
import { eventsSortingConfig } from "@/utils/data/sorting";

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
  const [initialUserEvents, setInitialUserEvents] = useState<Ievent[]>([]);

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
      setInitialUserEvents(userEvents);
    };
    fetchData();
  }, []);

  return (
    <>
      <FeaturesListLayout
        title={
          user?._id === params.userId
            ? "Twoje wydarzenia"
            : `Wydarzenia użytkownika ${user?.name ?? ""} ${user?.surname ?? ""} ${user?.class ?? ""}`
        }
        content={
          <EventList events={userEvents}  setEvents={setUserEvents} />
        }
        elements={userEvents}
        initialElements={initialUserEvents}
        setElements={setUserEvents}
        sortingConfig={eventsSortingConfig}
      />
    </>
  );
}
