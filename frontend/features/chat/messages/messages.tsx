import { useUser } from "@/utils/hooks";
import React from "react";
import useMessages from "./use-messages";

interface Iprops {
  secondUserId: string;
}

const Messages: React.FC<Iprops> = ({ secondUserId }) => {
  const { messages } = useMessages({ secondUserId });
  const { user } = useUser();

  const messagesMap = messages?.map((message) => {
    return (
      <div
        className={`flex w-full mb-2 justify-${
          message.userId === user?._id ? "end" : "start "
        }`}
        key={message.createdAt}
      >
        <p
          className={`py-2 max-w-xs px-3 break-words shadow ${
            message.userId === user?._id
              ? "bg-white rounded-l-lg border-r border-gray-300"
              : "bg-red-300 border-red-400 rounded-r-lg border-l"
          }`}
        >
          {message.content} <br />
        </p>
      </div>
    );
  });

  return (
    <div className="h-full max-h-full ">
      {messages ? (
        <div className="flex flex-col-reverse w-full h-full px-10 pb-5 overflow-y-scroll">
          {messagesMap}
          <p className="my-3 text-center text-gray-400">Początek konwersacji</p>
        </div>
      ) : (
        <div>Ładowanie</div>
      )}
    </div>
  );
};

export default Messages;
