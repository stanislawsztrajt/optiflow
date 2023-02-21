import React, { Dispatch, FC, SetStateAction } from "react";
import EventItem from "../event-item/event-item";
import { Ievent } from "../types";

interface Props {
  events: Ievent[];
  setEvents: Dispatch<SetStateAction<Ievent[]>>
}

const EventList: FC<Props> = ({ events, setEvents }) => {
  const eventsMap = events.map((event) => {
    return (
      <EventItem
        key={event._id}
        event={event}
        setEvents={setEvents}
      />
    )
  });

  return (
    <div>
      {events.length > 0 ? (
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 xl:grid-cols-3">
          {eventsMap}
        </div>
      ) : (
        <div>
          <h2 className="text-2xl text-gray-500 sm:text-4xl">
            Nie znaleziono żadnych wydarzeń
          </h2>
        </div>
      )}
    </div>
  );
};

export default EventList;
