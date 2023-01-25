import { Iuser } from "@/features/users/types";
import Cookies from "js-cookie";

export const user: Iuser | null = Cookies.get("user")
  ? JSON.parse(Cookies.get("user") as string)
  : null;
export const jwt: string | null = Cookies.get("jwt") ?? null;
export const authHeader = jwt
  ? { headers: { authorization: `Bearer ${jwt}` } }
  : undefined;
