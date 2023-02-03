export enum BookCategoryEnum {
  MATH = "Matematyka",
  HISTORY = "Historia",
}
export type BookCategoryType = `${BookCategoryEnum}`;
export const BookCategories = Object.values(BookCategoryEnum);

export enum BookLookEnum {
  GOOD = "Dobry",
  WEAK = "Słaby",
}
export type BookLookType = `${BookLookEnum}`;
export const BookLooks = Object.values(BookLookEnum);

export enum BookTypeEnum {
  BUY = "Kupię",
  SELL = "Sprzedam",
}
export type BookTypeType = `${BookTypeEnum}`;
export const BookTypes = Object.values(BookTypeEnum);

export interface Ibook {
  title: string;
  description: string;
  category: BookCategoryType;
  images: string[];
  price: number;
  look: BookLookType;
  userId: string;
  _id: string;
}
