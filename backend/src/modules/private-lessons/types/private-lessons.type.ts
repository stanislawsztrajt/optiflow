export enum PrivateLessonsOfferTypeEnum {
  OFFER = "Udzielę korepetycji",
  NEED = "Potrzebuję korepetycji",
}
export type PrivateLessonsOfferTypeType = `${PrivateLessonsOfferTypeEnum}`;

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

export type PrivateLessonsCategoryType = `${PrivateLessonsCategoryEnum}`;