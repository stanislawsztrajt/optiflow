// FC type with children
import { FC, PropsWithChildren } from "react";
export type FCC<P = {}> = FC<PropsWithChildren<P>>;

export interface IrulesAndLawLink {
  title: string;
  route: string;
}
