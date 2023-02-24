"use client";

import CreateBookForm from "@/features/books/create-book-form";
import { isLoggedIn } from "@/utils/hooks/use-routes-guards";
import React from "react";

export default function CreateBookPage() {
  isLoggedIn()
  return <CreateBookForm />;
}
