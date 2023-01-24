import chatServices from '@/utils/api/chat-services';
import { useUser } from '@/utils/hooks';
import { useState, useEffect } from 'react';
import { Ichat, Imessage } from '../types';
import { socket } from '@/utils/socket';

const useChatsList = () => {
  const { user } = useUser()
  const [chats, setChats] = useState<Ichat[]>([])

  const getChats = async () => {
    if(!user?._id) return
    const userChats:Ichat[] = await chatServices.findChats(user?._id)

    console.log(userChats)
    setChats(userChats)
  }

  useEffect(() => {
    if(!user?._id) return
    getChats()
  }, [user]);

  return {
    chats
  }
}

export default useChatsList;