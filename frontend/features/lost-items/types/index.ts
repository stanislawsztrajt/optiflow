export type LostItemFoundType = "Zgubione" | "Znalezione";
export enum LostItemFoundEnum {
  LOST = "Zgubione",
  FOUND = "Znalezione",
}
export const LostItemTypes = Object.values(LostItemFoundEnum);

export interface IlostItem {
  _id: string;
  name: string;
  description: string;
  foundLocation?: string;
  date: Date;
  images: string[];
  type: LostItemFoundType;
  userId: string;
}
