export enum PrivateLessonsCategoryEnum {
  MATH = "Matematyka",
}

export interface IprivateLesson {
  title: string;
  description: string;
  category: PrivateLessonsCategoryEnum[];
  price: number;
  date: Date;
  userId: string;
}
