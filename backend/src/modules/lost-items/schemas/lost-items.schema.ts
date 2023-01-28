import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { LostItemFoundType } from '../types/lost-items.type';

export type LostItemDocument = HydratedDocument<LostItem>;

@Schema({ timestamps: true })
export class LostItem {
  @Prop({ maxlength: 100 })
  name: string;

  @Prop({ maxlength: 500 })
  description: string;

  @Prop({ maxlength: 100 })
  foundLocation?: string;
  // the place where the item was found

  @Prop()
  date: Date;

  @Prop()
  images: string[];

  @Prop()
  type: LostItemFoundType;

  @Prop()
  userId: string;
}

export const LostItemSchema = SchemaFactory.createForClass(LostItem);
