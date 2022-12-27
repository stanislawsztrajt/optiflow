import { Iuser } from "@/features/users/types";

export interface Imessage {
  content: string;
  userId: string;
  secondUserId: string;
  createdAt: string;
  updatedAt: string;
}

export interface Ichat {
  user: Iuser
  latestMessage: Imessage
}