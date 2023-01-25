import React, { FC } from "react";
import EventItem from "../event-item/event-item";
import { Ievent } from "../types";

interface Props {
  events: Ievent[];
}

const EventList: FC<Props> = ({ events }) => {

  const eventsMap = events.map(event => {
    return (
      <EventItem key={event._id} event={event} />
    )
  })

  return (
    <div className="grid grid-cols-1 gap-16 md:grid-cols-2 xl:grid-cols-3">
      {eventsMap}
    </div>
  )
}

export default EventList;
