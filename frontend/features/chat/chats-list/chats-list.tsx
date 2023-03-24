import { Loading } from "@/features/ui";
import Link from "next/link";
import React from "react";
import useChatsList from "./use-chats-list";

const ChatsList: React.FC = () => {
  const { chats, loading } = useChatsList();

  const chatsMap = chats.map((chat) => {
    return (
      <Link
        href={`/chat/${chat.user._id}`}
        key={chat.latestMessage.createdAt}
        className="p-3 border-b hover:bg-gray-50 hover:shadow-inner"
      >
        <p>
          {chat.user.name} {chat.user.surname}
        </p>
      </Link>
    );
  });

  return (
    <div className="h-full">
      {
        loading ?
          <div className='flex items-center justify-center p-5'>
            <Loading />
          </div>
        :
          chats.length > 0 ?
            <div className="flex flex-col">
              {chatsMap}
            </div>
          :
            <div className="flex items-center justify-center w-full h-full">
              <p className="text-center text-gray-400">Brak konwersacji</p>
            </div>
      }
    </div>
  );
};

export default ChatsList;
