import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './schemas/messages.schema';
import { Chat } from './types';
import { UseGuards } from '@nestjs/common/decorators';
import { MessageOwnersGuard } from './guards/message-owners.guard';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @UseGuards(MessageOwnersGuard, JwtAuthGuard)
  @Get(':userId')
  async findChats(@Param('userId') userId: string): Promise<Chat[]> {
    return await this.messagesService.findChats(userId);
  }

  @UseGuards(MessageOwnersGuard, JwtAuthGuard)
  @Get(':userId/:secondUserId')
  async findMessagesChat(
    @Param('userId') userId: string,
    @Param('secondUserId') secondUserId: string,
  ): Promise<Message[]> {
    return await this.messagesService.findMessagesChat(userId, secondUserId);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createMessageDto: CreateMessageDto): Promise<Message> {
    return await this.messagesService.create(createMessageDto);
  }
}
