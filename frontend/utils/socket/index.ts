import io from "socket.io-client";
import { user } from "../constans/user";

export const socket = user
  ? io(process.env.NEXT_PUBLIC_SOCKET_URL || "http://localhost:1337")
  : null;

if (socket && user) {
  socket.emit("beOnline", { userId: user._id });
}

// * how to use in client
// * how to join to room
// * you muset be online
// how to be?
//  socket.emit('joinRoom', { room: 'room' })

// * how to get online users ids using redux
// const onlineUsers = useSelector(getOnlineUsers)

// * how to get online users ids:
// ? first emit onlineUsersIds:
//      socket.emit('onlineUsersIds')
// ? next to:
//      socket.on('getOnlineUsersIds', (users: string[]) => (users))
//      to get list of online users from redux you have to use useSelector e.g(ids is loading from page root)
//      const onlineUsersIds = useSelector(getOnlineUsersIds)

// * how to send and get message
// ? send message
//      socket.emit('sendMessage', message)
// ? get message
//      socket.on('message', (message: Imessage) => (message))
//      ? message is { content: string, secondUserId: string }, but when you get e.g chat you will get type Imessage[]
// interface Imessage {
//   content: string;
//   userId: string;
//   secondUserId: string;
//   createdAt: string;
//   updatedAt: string;
// }
