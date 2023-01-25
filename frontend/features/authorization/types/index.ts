import { Iuser } from "@/features/users/types";

export interface IloginDto {
  login: string;
  password: string;
}
export interface IloginResponse {
  user: Iuser;
  jwt: string;
}
