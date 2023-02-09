"use client";

import { useState, useEffect } from "react";
import eventsServices from "@/utils/api/events-services";
import EventList from "@/features/events/event-list";
import EventSearchInput from "@/features/events/event-search-input";
import { Ievent } from "@/features/events/types";
import { FeaturesItemsLayout } from "@/features/ui";

export default function EventsPage() {
  const [initialEvents, setInitialEvents] = useState<Ievent[]>([]);
  const [events, setEvents] = useState<Ievent[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    eventsServices.findAll().then((res) => {
      setEvents(res);
      setInitialEvents(res);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <FeaturesItemsLayout
        title="Wydarzenia"
        searchInput={
          <EventSearchInput events={initialEvents} setEvents={setEvents} />
        }
        content={
          <EventList events={events} loading={loading} />
        }
      />
    </>
  );
}
