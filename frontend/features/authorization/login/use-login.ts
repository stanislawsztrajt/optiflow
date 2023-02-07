"use client";

import { useState } from "react";
import Cookies from "js-cookie";
import authServices from "@/utils/api/auth-services";
import { IloginDto } from "../types";
import { Ierror } from "@/utils/types/api";

const useLogin = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const login = async (loginDto: IloginDto) => {
    setLoading(true);
    try {
      const data = await authServices.login(loginDto);
      setError("");
      Cookies.set("user", JSON.stringify(data.user), { expires: 7 });
      Cookies.set("jwt", data.jwt, { expires: 7 });

      window.location.href = "/dashboard";
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
