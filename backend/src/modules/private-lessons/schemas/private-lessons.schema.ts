import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PrivateLessonDocument = HydratedDocument<PrivateLesson>;

export enum PrivateLessonsCategoryEnum {
  MATH = 'Matematyka',
}

@Schema({ timestamps: true })
export class PrivateLesson {
  @Prop({ maxlength: 100 })
  title: string;

  @Prop({ maxlength: 500 })
  description: string;

  @Prop()
  category: PrivateLessonsCategoryEnum[];

  @Prop({ max: 10000000000 })
  price: number;

  @Prop()
  date: Date;

  @Prop()
  userId: string;
}

export const PrivateLessonsSchema = SchemaFactory.createForClass(PrivateLesson);
