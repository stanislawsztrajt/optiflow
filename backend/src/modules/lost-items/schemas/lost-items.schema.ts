import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { LostItemFoundType } from '../types/lost-items.type';

export type LostItemDocument = HydratedDocument<LostItem>;

@Schema({ timestamps: true })
export class LostItem {
  @Prop({ maxlength: 100 })
  name: string;

  @Prop({ maxlength: 100 })
  foundLocation: string;
  // the place where the item was found

  @Prop({ maxlength: 500 })
  description: string;

  @Prop()
  images: string[];

  @Prop({ max: 100000000000 })
  price: number;

  @Prop()
  type: LostItemFoundType;

  @Prop()
  userId: string
}

export const LostItemSchema = SchemaFactory.createForClass(LostItem);