"use client";

import { useState, useEffect } from "react";
import eventsServices from "@/utils/api/events-services";
import EventList from "@/features/events/event-list";
import { Ievent } from "@/features/events/types";
import { FeaturesListLayout } from "@/features/ui";
import { eventsSortingConfig } from "@/utils/data/sorting";

export default function EventsPage() {
  const [initialEvents, setInitialEvents] = useState<Ievent[]>([]);
  const [events, setEvents] = useState<Ievent[]>([]);

  useEffect(() => {
    eventsServices.findAll().then((res) => {
      setEvents(res);
      setInitialEvents(res);
    });
  }, []);

  return (
    <>
      <FeaturesListLayout
        title="Wydarzenia"
        content={
          <EventList events={events} setEvents={setEvents} />
        }
        elements={events}
        initialElements={initialEvents}
        setElements={setEvents}
        sortingConfig={eventsSortingConfig}
      />
    </>
  );
}
