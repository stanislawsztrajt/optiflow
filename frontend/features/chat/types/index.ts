import { Iuser } from "@/features/users/types";

export interface Imessage {
  content: string;
  userId: string;
  secondUserId: string;
  createdAt: string;
  updatedAt: string;
  _id: string;
}

export interface Ichat {
  user: Iuser
  latestMessage: Imessage
}

export interface ImessageInputInitialValues {
  content: string
}

export interface ImessageInputFormikActions {
  resetForm: () => void
}