"use client";

import { useState } from "react";
import Cookies from "js-cookie";
import authServices from "@/utils/api/auth-services";
import { IloginDto } from "../types";
import { useRouter } from "next/navigation";
import { Ierror } from "@/utils/types/api";

const useLogin = () => {
  const router = useRouter();

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const login = async (loginDto: IloginDto) => {
    setLoading(true);
    try {
      const data = await authServices.login(loginDto);
      setError("");
      Cookies.set("user", JSON.stringify(data.user));
      Cookies.set("jwt", data.jwt);

      router.push("/dashboard");
    } catch (err) {
      console.error(err);
      const error = err as unknown as Ierror;
      setError(error.response.data.message);
    }
    setLoading(false);
  };

  return {
    login,
    error,
    loading,
  };
};

export default useLogin;