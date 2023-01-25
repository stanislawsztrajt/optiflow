import chatServices from "@/utils/api/chat-services";
import { useUser } from "@/utils/hooks";
import { useState, useEffect } from "react";
import { Imessage, Ichat } from "../types";
import { socket } from "@/utils/socket";

interface Iprops {
  secondUserId: string;
}

const useMessages = (props: Iprops) => {
  const { secondUserId } = props;
  const { user } = useUser();
  const [messages, setMessages] = useState<Imessage[]>([]);

  const getMessages = async () => {
    if (!user?._id) return;
    const chatMessages: Imessage[] = await chatServices.findChat(
      user?._id,
      secondUserId
    );

    // sorting messages by creation date
    chatMessages.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    setMessages(chatMessages);
  };

  socket?.off("message");
  socket?.on("message", (message: Imessage) => {
    setMessages((messages) => {
      return [message, ...messages];
    });
  });

  useEffect(() => {
    if (!user?._id) return;
    getMessages();
  }, [user]);

  return {
    messages,
  };
};

export default useMessages;
