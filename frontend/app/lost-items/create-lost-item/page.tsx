"use client";

import CreateLostItemForm from "@/features/lost-items/create-lost-item-form";
import { isLoggedIn } from "@/utils/hooks/use-routes-guards";
import React from "react";

export default function CreateLostItemPage() {
  isLoggedIn()
  return <CreateLostItemForm />;
}
