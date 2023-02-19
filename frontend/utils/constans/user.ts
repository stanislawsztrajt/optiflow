import { Iuser } from "@/features/users/types";
import Cookies from "js-cookie";

const cookieUser = Cookies.get("user");
export const user = cookieUser ? JSON.parse(cookieUser) as unknown as Iuser : null

export const jwt: string | null = Cookies.get("jwt") ?? null;
export const authHeader = jwt
  ? { headers: { authorization: `Bearer ${jwt}` } }
  : undefined;
