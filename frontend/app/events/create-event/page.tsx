"use client";

import CreateEventForm from "@/features/events/create-event-form";
import { isLoggedIn } from "@/utils/hooks/use-routes-guards";
import React from "react";

export default function CreateBookPage() {
  isLoggedIn()
  return <CreateEventForm />;
}
