import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { PrivateLessonsCategoryType, PrivateLessonsOfferTypeType } from '../types/private-lessons.type';

export type PrivateLessonDocument = HydratedDocument<PrivateLesson>;

@Schema({ timestamps: true })
export class PrivateLesson {
  @Prop({ maxlength: 100 })
  title: string;

  @Prop({ maxlength: 500 })
  description: string;

  @Prop()
  category: PrivateLessonsCategoryType;

  @Prop()
  offerType: PrivateLessonsOfferTypeType;

  @Prop({ min: 0, max: 10000000 })
  price: number;

  @Prop()
  userId: string;
}

export const PrivateLessonsSchema = SchemaFactory.createForClass(PrivateLesson);
