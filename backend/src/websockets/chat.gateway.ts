import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer, WsResponse } from '@nestjs/websockets'
import { Server, Socket } from 'socket.io';

@WebSocketGateway(1338, {
  cors: '*'
})
export class ChatGateway {
  @WebSocketServer()
  server: Server;

  onModuleInit() {
    this.server.on('connection', async (socket: Socket) => {
      console.log('connected: ' + socket.id)
      let currentUser: { id: string, userId: string, room: string } = { id: '', userId: '', room: '' };
      socket.on('joinRoom', ({ userId, room }) => {
        const user = { id: socket.id, userId, room }
        currentUser = user;
        socket.join(room)
        console.log('joined! ', user);
        // socket.broadcast.to(room).emit('message', { message: '' })
      })

      socket.on('sendMessage', (message: string) => {
        this.server.to(currentUser.room).emit("message", message)
        console.log('message has been sent')
      })

      // socket.on('disconnect', () => {
      //   socket.broadcast.to(currentUser.room).emit('message', {})
      // })
    })
  }
}