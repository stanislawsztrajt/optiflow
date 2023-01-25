export type LostItemFoundType = "Zgubione" | "Znalezione";
export enum LostItemFoundEnum {
  LOST = "Zgubione",
  FOUND = "Znalezione",
}

export interface IlostItem {
  _id: string;
  name: string;
  foundLocation: string;
  description: string;
  images: string[];
  price: number;
  type: LostItemFoundType;
  userId: string;
}
