"use client";

import { useState, useEffect } from "react";
import eventsServices from "@/utils/api/events-services";
import EventList from "@/features/events/event-list";
import { Ievent } from "@/features/events/types";
import { FeaturesListLayout } from "@/features/ui";

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
      <FeaturesListLayout
        title="Wydarzenia"
        content={
          <EventList events={events} setEvents={setEvents} />
        }
        elements={initialEvents}
        setElements={setEvents}
      />
    </>
  );
}
