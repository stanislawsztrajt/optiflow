export enum PrivateLessonsCategoryEnum {
  MATH = "Matematyka",
}

export interface IprivateLesson {
  _id: string;
  title: string;
  description: string;
  category: PrivateLessonsCategoryEnum[];
  price: number;
  date: Date;
  userId: string;
}
