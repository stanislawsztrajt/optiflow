'use client'

import { useState, useEffect } from 'react';
import { Iuser } from "@/features/users/types";
import { useUser } from '@/utils/hooks';
import UsersServices from "@/utils/api/users-services";
import { socket } from '@/utils/socket';


interface Iprops {
  secondUserId: string
}

const useChatWindow = (props:Iprops) => {
  const [loading, setLoading] = useState<boolean>(true)
  const { secondUserId } = props
  const { user } = useUser()
  const [secondUser, setSecondUser] = useState<Iuser>();

  const joinSocketRoom = () => {
    const roomId = [secondUserId, user?._id].sort().join('')
    socket?.emit('joinRoom', { room: roomId })
    setLoading(false)
  }

  const getSecondUser = async () => {
    const data:Iuser = await UsersServices.findOne(secondUserId)
    setSecondUser(data)
  }

  useEffect(() => {
    getSecondUser()
  }, []);

  useEffect(() => {
    if(user?._id) joinSocketRoom()
  }, [user]);


  return {
    user,
    secondUser,
    loading
  }
}

export default useChatWindow;