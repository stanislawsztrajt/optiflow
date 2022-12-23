export type BookCategoryType = "Matematyka" | "Historia";
export enum BookCategoryEnum {
  MATH = "Matematyka",
  HISTORY = "Historia",
}
export const BookCategories = Object.values(BookCategoryEnum);

export type BookLookType = "Dobry" | "Słaby";
export enum BookLookEnum {
  GOOD = "Dobry",
  WEAK = "Słaby",
}
export const BookLooks = Object.values(BookLookEnum);

export type BookTypeType = "Kupię" | "Sprzedam";
export enum BookTypeEnum {
  BUY = "Kupię",
  SELL = "Sprzedam",
}
export const BookTypes = Object.values(BookTypeEnum);

export interface Ibook {
  title: string;
  description: string;
  category: BookCategoryType;
  images: string[];
  price: number;
  look: BookLookType;
  userId: string;
}
