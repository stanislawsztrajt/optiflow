"use client";

import EventList from "@/features/events/event-list";
import { Ievent } from "@/features/events/types";
import { Iuser } from "@/features/users/types";
import usersServices from "@/utils/api/users-services";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FeaturesItemsLayout } from "@/features/ui";
import EventSearchInput from "@/features/events/event-search-input";
import { useUser } from "@/utils/hooks";

interface Iprops {
  params: {
    userId: string;
  };
}

export default function EventsPage(props: Iprops) {
  const { params } = props;
  const router = useRouter();
  const { user: User } = useUser()

  const [user, setUser] = useState<Iuser>();
  const [userEvents, setUserEvents] = useState<Ievent[]>([]);
  const [initialUserEvents, setInitialUserEvents] = useState<Ievent[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

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
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <FeaturesItemsLayout
      title={
        User?._id === params.userId
          ? "Twoje wydarzenia"
          : `Wydarzenia użytkownika ${user?.name ?? ""} ${
              user?.surname ?? ""
            } ${user?.class ?? ""}`
      }
      searchInput={
        <EventSearchInput events={initialUserEvents} setEvents={setUserEvents} />
      }
      content={
        <EventList events={userEvents} loading={loading} />
      }
    />
  );
}
