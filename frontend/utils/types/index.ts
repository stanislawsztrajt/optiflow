import { FC, PropsWithChildren } from "react";

// FC type with children
export type FCC<P = {}> = FC<PropsWithChildren<P>>;
