import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { BookCategoryType, BookLookType } from '../types/books.type';

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
  images: string[];

  @Prop({ max: 100000000000 })
  price: number;

  @Prop()
  look: BookLookType

  @Prop()
  userId: Types.ObjectId | string
}

export const BookSchema = SchemaFactory.createForClass(Book);