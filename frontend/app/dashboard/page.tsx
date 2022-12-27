"use client";

import { Iuser } from "@/features/users/types";
import usersServices from "@/utils/api/users-services";
import { user as User } from "@/utils/constans/user";
import React, { useEffect, useState } from "react";

export default function DashboardPage() {
  const [user, setUser] = useState<Iuser | null>(null);
  useEffect(() => setUser(User), []);

  return (
    <main className="">
      dashboard
      <div>
        {user?.class}
        {user?.name}
        {user?.surname}
      </div>
    </main>
  );
}
