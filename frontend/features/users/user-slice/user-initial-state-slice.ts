import { user } from "@/utils/constans/user";
import { Iuser } from "../types";

export interface IusersInitialStateSlice {
  user: Iuser | null;
  status: "loading" | "failed" | "succeeded";
}

export const userInitialStateSlice: IusersInitialStateSlice = {
  user,
  status: "loading",
};
