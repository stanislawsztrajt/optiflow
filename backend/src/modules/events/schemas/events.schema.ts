import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type EventDocument = HydratedDocument<Event>;

@Schema({ timestamps: true })
export class Event {
  @Prop({ maxlength: 200 })
  title: string;

  @Prop({ maxlength: 1000 })
  description: string;

  @Prop({ maxlength: 100 })
  location: string;

  @Prop()
  date: Date;

  @Prop()
  images: string[];

  @Prop()
  price?: number;

  @Prop()
  userId: Types.ObjectId | string
}

export const EventSchema = SchemaFactory.createForClass(Event);