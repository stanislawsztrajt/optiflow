import { Server } from 'socket.io';
import { MessagesService } from '../modules/messages/messages.service';
export declare class ChatGateway {
    private readonly messagesService;
    constructor(messagesService: MessagesService);
    server: Server;
    usersIds: string[];
    onModuleInit(): void;
}
