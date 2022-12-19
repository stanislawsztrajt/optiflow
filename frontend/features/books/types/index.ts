export type BookCategoryType = 'Matematyka' | 'Historia';
export type BookLookType = 'Dobry' | 'Słaby';

export interface Ibook {
  title: string
  description: string
  category: BookCategoryType
  images: string[]
  price: number
  look: BookLookType
  userId: string;
}