// FC type with children
import { Ibook } from "@/features/books/types";
import { Ievent } from "@/features/events/types";
import { IlostItem } from "@/features/lost-items/types";
import { IprivateLesson } from "@/features/private-lessons/types";
import { FC, PropsWithChildren } from "react";
import { Dispatch, SetStateAction } from "react";

export type FCC<P = {}> = FC<PropsWithChildren<P>>;

export interface IrulesAndLawLink {
  title: string;
  route: string;
}

export type featureElementsType = Ievent[] | IprivateLesson[] | Ibook[] | IlostItem[];

export type featureSetElementsType = Dispatch<SetStateAction<Ibook[]>> | Dispatch<SetStateAction<Ievent[]>> | Dispatch<SetStateAction<IprivateLesson[]>> | Dispatch<SetStateAction<IlostItem[]>>;
