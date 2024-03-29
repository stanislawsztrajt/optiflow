import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { BookCategoryType, BookLookType, BookTypeType } from '../types/books.type';

export type BookDocument = HydratedDocument<Book>;

@Schema({ timestamps: true })
export class Book {
  @Prop({ maxlength: 100 })
  title: string;

  @Prop({ maxlength: 500 })
  description: string;

  @Prop()
  category: BookCategoryType;

  @Prop()
  type: BookTypeType;

  @Prop({ maxlength: 50 })
  publishingHouse: string;

  @Prop({ minlength: 0, maxlength: 5 })
  part: string;

  @Prop()
  images: string[];

  @Prop({ min: 0, max: 10000000000 })
  price: number;

  @Prop()
  look: BookLookType;

  @Prop()
  userId: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);
