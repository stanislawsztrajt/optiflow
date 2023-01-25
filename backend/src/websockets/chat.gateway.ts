import {
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { CreateMessageDto } from 'src/modules/messages/dto/create-message.dto';
import { MessagesService } from 'src/modules/messages/messages.service';


@WebSocketGateway(1338, {
  cors: '*',
})

export class ChatGateway {
  constructor(private readonly messagesService: MessagesService) {}

  @WebSocketServer()
  server: Server;
  usersIds: string[] = []

  onModuleInit() {
    this.server.on('connection', async (socket: Socket) => {
      let currentUser = { id: '', userId: '', room: '' };

      socket.on('beOnline', ({ userId }) => {
        currentUser = { ...currentUser, id: socket.id, userId };
        const isUserIdAlreadyExist = this.usersIds.some(userId => userId === currentUser.userId)
        if (isUserIdAlreadyExist) return

        this.usersIds.push(userId)
        console.log('[SOCKET] user joined: ', currentUser);
      });

      socket.on('joinRoom', ({ room }) => {
        currentUser = { ...currentUser, room }
        socket.join(room);

        console.log('[SOCKET] user joined to room: ', currentUser);
      });

      socket.on('sendMessage', (message: CreateMessageDto) => {
        this.messagesService.create({
          ...message,
          userId: currentUser.userId
        })

        const emitedMessage = {
          ...message,
          userId: currentUser.userId,
          createdAt: new Date(),
          updatedAt: new Date()
        }
        this.server.to(currentUser.room).emit("message", emitedMessage);
        console.log('[SOCKET] POST message');
      });

      socket.on('displayNotifications', () => {
        socket.emit('displayNotifications')
      })

      socket.on('hideNotifications', () => {
        socket.emit('hideNotifications')
      })

      socket.on('onlineUsersIds', () => {
        this.server.to(currentUser.id).emit('getOnlineUsersIds', this.usersIds)
        console.log('[SOCKET] GET online usersIds')
      })

      socket.on('disconnect', () => {
        this.usersIds = this.usersIds.filter(userId => userId !== currentUser.userId)
        console.log('DISCONNECT ', currentUser)
      })
    });
  }
}