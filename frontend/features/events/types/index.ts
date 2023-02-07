export interface Ievent {
  _id: string;
  title: string;
  description: string;
  location: string;
  date: Date;
  images: string[];
  price?: number;
  userId: string;
}
