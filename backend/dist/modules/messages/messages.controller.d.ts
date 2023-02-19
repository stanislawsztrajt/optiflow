import { MessagesService } from './messages.service';
import { Message } from './schemas/messages.schema';
import { Chat } from './types';
export declare class MessagesController {
    private readonly messagesService;
    constructor(messagesService: MessagesService);
    findChats(userId: string): Promise<Chat[]>;
    findMessagesChat(userId: string, secondUserId: string): Promise<Message[]>;
}
