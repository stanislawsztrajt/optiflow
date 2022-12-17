import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

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
}

export const UserSchema = SchemaFactory.createForClass(User);