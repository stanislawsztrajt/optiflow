import io from 'socket.io-client';

export const socket = io(process.env.NEXT_PUBLIC_SOCKET_URL || 'http://localhost:1338')


// * how to use in client
  // * how to join to room
  //      socket.emit('joinRoom', { userId: 'userId', room: 'room' })

  // * how to get users:
  // ? first emit onlineUsers:
  //      socket.emit('onlineUsers')
  // ? next to:
  //      socket.on('getOnlineUsers', (users: Iuser[]) => (users))


  // * how to send and get message
  // ? send message
  //      socket.emit('sendMessage', message)
  // ? get message
  //      socket.on('message', (message: string) => (message))
  //      ?? message is content(string), but when you get e.g chat you will get type Imessage[]
  // interface Imessage {
  //   content: string;
  //   userId: string;
  //   secondUserId: string;
  //   createdAt: string;
  //   updatedAt: string;
  // }