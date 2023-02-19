export enum LostItemFoundEnum {
  LOST = "Zgubione",
  FOUND = "Znalezione",
}
export type LostItemFoundType = `${LostItemFoundEnum}`;
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
