"use client";

import { useEffect, useState } from "react";
import { Ievent } from "@/features/events/types";
import eventsServices from "@/utils/api/events-services";
import EditEventForm from "@/features/events/edit-event-form";

interface Iprops {
  params: {
    eventId: string;
  };
}

export default function EditEventPage(props: Iprops) {
  const { params } = props;
  const [event, setEvent] = useState<Ievent>();

  useEffect(() => {
    fetchEvent();
  }, []);

  const fetchEvent = async () => {
    const event: Ievent = await eventsServices.findOne(params.eventId);
    setEvent(event);
  };

  return (
    <>
      {
        event ?
          <EditEventForm currentEvent={event} />
        : null
      }
    </>
  );
}
