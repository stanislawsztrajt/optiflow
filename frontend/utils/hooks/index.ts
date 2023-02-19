"use client";

import { Iuser } from "@/features/users/types";
import { user as User } from "@/utils/constans/user";
import { useEffect, useState } from "react";

export const useUser = () => {
  const [user, setUser] = useState<Iuser | null>(null);
  useEffect(() => {
    setUser(User)
  }, []);

  return {
    user,
  };
};
