"use client";

import React from "react";
import { useUser } from "@/utils/hooks";

export default function DashboardPage() {
  const { user } = useUser()

  return (
    <main className="">
      dashboard
      <div>
        <p>{user?.class}</p>
        <p>{user?.name}</p>
        <p>{user?.surname}</p>
      </div>
    </main>
  );
}