export enum BookCategoryEnum {
  MATH = "Matematyka",
  POL = "Język polski",
  ENG = "Język angielski",
  ESP = "Język hiszpański",
  GER = "Język niemiecki",
  HIST = "Historia",
  PHYS = "Fizyka",
  BIOL = "Biologia",
  CHEM = "Chemia",
  INF = "Informatyka",
  OTHER = "Inne",
  PROFESSION_WOOD_TECHNOLOGY = 'Zawodowe technologia drewna',
  PROFESSION_PROGRAMMER = 'Zawodowe programista',
  PROFESSION_IT = 'Zawodowe informatyk',
  PROFESSION_PHOTOGRAPHY_AND_MULTIMEDIA = 'Zawodowe fotografia i multimedia',
  PROFESSION_MECHATRONICS = 'Zawodowe mechatronik',
  PROFESSION_ROBOTICIST = 'Zawodowe robotyk'
}
export type BookCategoryType = `${BookCategoryEnum}`;
export const BookCategories = Object.values(BookCategoryEnum);

export enum BookLookEnum {
  NEW = "Nowy",
  VERY_GOOD = "Bardzo dobry",
  GOOD = "Dobry",
  AVG = "Przeciętny",
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