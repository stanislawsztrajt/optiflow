import { Ibook } from "@/features/books/types";
import { Ievent } from "@/features/events/types";
import { IlostItem } from "@/features/lost-items/types";
import { IprivateLesson } from "@/features/private-lessons/types";

export interface Iuser {
  name: string;
  surname: string;
  class: string;
  role?: string;
  _id: string;
}

export enum UsersEnum {
  USER = 'Użytkownik',
  ADMIN = 'Admin'
}

export interface IuserInfo {
  books: Ibook[];
  events: Ievent[];
  lostItems: IlostItem[];
  privateLessons: IprivateLesson[];
}

export interface IuserInfoLength {
  books: number;
  events: number;
  lostItems: number;
  privateLessons: number;
}
