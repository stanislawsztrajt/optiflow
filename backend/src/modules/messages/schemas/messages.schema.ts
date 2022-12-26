import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MessageDocument = HydratedDocument<Message>;

@Schema({ timestamps: true })
export class Message {
  @Prop({ maxlength: 500 })
  content: string;

  @Prop()
  userId: string

  @Prop()
  secondUserId: string
}

export const MessageSchema = SchemaFactory.createForClass(Message);