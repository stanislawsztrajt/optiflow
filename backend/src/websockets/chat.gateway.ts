import {
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { CreateMessageDto } from 'src/modules/messages/dto/create-message.dto';
import { MessagesService } from 'src/modules/messages/messages.service';

interface IsocketUser {
  id: string;
  userId: string;
  room: string;
}

@WebSocketGateway(1338, {
  cors: '*',
})

export class ChatGateway {
  constructor(private readonly messagesService: MessagesService) {}

  @WebSocketServer()
  server: Server;
  users: IsocketUser[] = []

  onModuleInit() {
    this.server.on('connection', async (socket: Socket) => {
      let currentUser: IsocketUser = { id: '', userId: '', room: '' };

      socket.on('joinRoom', ({ userId, room }) => {
        currentUser = { id: socket.id, userId, room };
        this.users.push(currentUser)
        socket.join(room);

        console.log('[SOCKET] user joined: ', currentUser);
      });

      socket.on('sendMessage', (message: CreateMessageDto) => {
        this.messagesService.create(message)
        this.server.to(currentUser.room).emit("message", message.content);
        console.log('[SOCKET] POST message');
      });

      socket.on('onlineUsers', () => {
        this.server.to(currentUser.id).emit('getOnlineUsers', this.users)
        console.log('[SOCKET] GET online users')
      })

      socket.on('disconnect', () => {
        this.users = this.users.filter(user => user.id !== currentUser.id)
        console.log('DISCONNECT ', currentUser)
      })
    });
  }
}