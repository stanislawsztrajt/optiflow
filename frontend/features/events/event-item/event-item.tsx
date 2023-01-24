import Image from "next/image";
import React, { FC } from "react";
import { Ievent } from "../types";

interface Props {
  event: Ievent;
}

const EventItem: FC<Props> = ({ event }) => {
  return (
    <div>
      <div>{event.title}</div>
      <div>{event.description}</div>
      <div>{event.location}</div>
      <div>{event.price ?? "To wydarzenie jest darmowe"}</div>
      <div>{event.date.toISOString()}</div>
      <div>
        <Image src={event.images[0]} alt="" loading="lazy" />
      </div>
    </div>
  );
};

export default EventItem;
