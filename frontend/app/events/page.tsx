"use client";

import { Ievent } from "@/features/events/types";
import eventsServices from "@/utils/api/events-services";
import EventList from '@/features/events/event-list'
import EventSearchInput from "@/features/events/event-search-input";
import { useState, useEffect } from "react";
import { Loading } from "@/features/ui";

export default function EvenstPage() {
  const [initialEvents, setInitialEvents] = useState<Ievent[]>([]);
  const [events, setEvents] = useState<Ievent[]>([]);
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    eventsServices.findAll().then(res => {
      setEvents(res)
      setInitialEvents(res)
      setLoading(false)
    })
  }, [])


  return <>
    <section className="mt-24 bg-white">
      <div className="container px-6 py-10 mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl">Wydarzenia</h1>
          <EventSearchInput events={initialEvents} setEvents={setEvents} />
        </div>

        <hr className="my-8 border-gray-200" />

          <EventList events={events} />
      </div>
    </section>
  </>;
}