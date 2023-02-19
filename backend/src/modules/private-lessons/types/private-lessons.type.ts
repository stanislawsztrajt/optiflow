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
  INF = "Informatyka"
}

export type PrivateLessonsCategoryType = `${PrivateLessonsCategoryEnum}`;