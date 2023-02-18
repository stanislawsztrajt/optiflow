"use client";

import { Ievent } from "@/features/events/types";
import eventsServices from "@/utils/api/events-services";
import { useEffect, useState } from "react";
import { placeholderImageUrl } from "@/utils/data";

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
    if (event.images.length === 0) event.images = [placeholderImageUrl];

    setEvent(event);
  };

  return (
    <div>
      {event?.title}
    </div>
  );
}
