import chatServices from "@/utils/api/chat-services";
import { useUser } from "@/utils/hooks";
import { useState, useEffect } from "react";
import { Ichat, Imessage } from "../types";

const useChatsList = () => {
  const { user } = useUser();
  const [chats, setChats] = useState<Ichat[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getChats = async () => {
    if (!user?._id) return;
    const userChats: Ichat[] = await chatServices.findChats(user._id);

    setLoading(false)
    setChats(userChats);
  };

  useEffect(() => {
    if (!user?._id) return;
    getChats();
  }, [user]);

  return {
    chats,
    loading
  };
};

export default useChatsList;
