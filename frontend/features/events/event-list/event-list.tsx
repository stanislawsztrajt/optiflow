import React, { FC } from "react";
import EventItem from "../event-item/event-item";
import { Ievent } from "../types";

interface Props {
  events: Ievent[];
  loading: boolean;
}

const EventList: FC<Props> = ({ events, loading }) => {
  const eventsMap = events.map((event) => {
    return <EventItem key={event._id} event={event} />;
  });

  return (
    <div>
      {events.length > 0 || loading ? (
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 xl:grid-cols-3">
          {eventsMap}
        </div>
      ) : (
        <div>
          <h2 className="text-4xl text-gray-500">
            Nie znaleziono żadnych wydarzeń
          </h2>
        </div>
      )}
    </div>
  );
};

export default EventList;
