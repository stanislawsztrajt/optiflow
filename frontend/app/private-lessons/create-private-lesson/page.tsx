"use client";
import CreatePrivateLessonForm from "@/features/private-lessons/create-private-lesson-form";
import { isLoggedIn } from "@/utils/hooks/use-routes-guards";
import React from "react";

export default function CreateBookPage() {
  isLoggedIn()
  return <CreatePrivateLessonForm />;
}
