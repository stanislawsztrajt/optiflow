import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { UsersEnum } from '../types';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @Prop()
  name: string;

  @Prop()
  surname: string;

  @Prop()
  class: string;

  @Prop({ select: false })
  login?: string;

  @Prop({ default: UsersEnum.USER })
  role?: string

  _id?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
