import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { findLatestMessage, groupBy } from '../../utils/helpers';
import { UsersService } from '../users/users.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message, MessageDocument } from './schemas/messages.schema';
import { Chat } from './types';

@Injectable()
export class MessagesService {
  constructor(
    @InjectModel(Message.name) private messageModel: Model<MessageDocument>,
    private readonly usersService: UsersService,
  ) {}

  async findMessagesChat(userId: string, secondUserId: string): Promise<Message[]> {
    return await this.messageModel.find({ userId, secondUserId });
  }

  async findChats(userId: string): Promise<Chat[]> {
    const messages: Message[] = await this.messageModel.find({ userId }).exec();
    const groupedMessages: Record<string, Message[]> = groupBy(
      messages,
      (message) => message.secondUserId,
    );
    const groupedMessagesEntries = Object.entries(groupedMessages);

    const chats: Chat[] = await Promise.all(
      groupedMessagesEntries
        .map(async ([secondUserId, messages]) => {
          const latestMessage = findLatestMessage(messages);
          const user = await this.usersService.findOne({ _id: secondUserId });

          return {
            latestMessage,
            user
          } as Chat
        })
      );
    return chats;
  }

  async create(createMessageDto: CreateMessageDto) {
    const createdBook = new this.messageModel(createMessageDto);
    return createdBook.save();
  }
}
