export enum PrivateLessonsCategoryEnum {
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
  PROFESSION_WOOD_TECHNOLOGY = 'Zawodowe: technologia drewna',
  PROFESSION_PROGRAMMER = 'Zawodowe: programista',
  PROFESSION_IT = 'Zawodowe: informatyk',
  PROFESSION_PHOTOGRAPHY_AND_MULTIMEDIA = 'Zawodowe: fotografia i multimedia',
  PROFESSION_MECHATRONICS = 'Zawodowe: mechatronik',
  PROFESSION_ROBOTICIST = 'Zawodowe: robotyk'
}

type PrivateLessonsCategoryType = `${PrivateLessonsCategoryEnum}`;
export const PrivateLessonsCategories = Object.values(PrivateLessonsCategoryEnum);

export enum PrivateLessonsOfferTypeEnum {
  OFFER = "Udzielę korepetycji",
  NEED = "Potrzebuję korepetycji",
}
export type PrivateLessonsOfferTypeType = `${PrivateLessonsOfferTypeEnum}`;
export const PrivateLessonsOfferTypes = Object.values(PrivateLessonsOfferTypeEnum);

export interface IprivateLesson {
  _id: string;
  title: string;
  description: string;
  category: PrivateLessonsCategoryType;
  offerType: PrivateLessonsOfferTypeType;
  price: number;
  userId: string;
}
