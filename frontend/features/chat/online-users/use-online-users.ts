'use client'

import { socket } from "@/utils/socket";
import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { loadOnlineUsersIds } from "../chat-slice/chat-slice";

const useOnlineUsers = () => {
  const dispatch = useDispatch()

  let isUsedOnce = false;
  useEffect(() => {
    if (!isUsedOnce) {
      isUsedOnce = true;

      socket.emit('joinRoom', { userId: Math.random().toString(), room: 'room' })
      socket.emit('onlineUsersIds')
      socket.on(
        'getOnlineUsersIds', 
        (users: string[]) => {
          console.log(users)
          dispatch(loadOnlineUsersIds(users))
        })
      setInterval(() => {
        socket.emit('onlineUsersIds')
      }, 5000)

    }
  }, [])

  return {}
}

export default useOnlineUsers