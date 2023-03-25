import { Loading } from "@/features/ui";
import { useUser } from "@/utils/hooks";
import React from "react";
import useMessages from "./use-messages";

interface Iprops {
  secondUserId: string;
}

const Messages: React.FC<Iprops> = ({ secondUserId }) => {
  const { user } = useUser();
  const { messages, loading } = useMessages({ secondUserId });

  const messagesMap = messages?.map((message, _index) => {
    return (
      <div
        className={`flex w-full justify-${
          message.userId === user?._id ? "end" : "start "
        } ${
          messages[_index - 1] && messages[_index - 1].userId === message.userId
            ? "mb-1"
            : "mb-4"
        }`}
        key={message.createdAt}
      >
        <p
          className={`py-2 max-w-xs px-3 break-words shadow-md ${
            message.userId === user?._id
              ? "bg-color-primary text-white rounded-l-lg"
              : "bg-gray-200 rounded-r-lg "
          }`}
        >
          {message.content} <br />
        </p>
      </div>
    );
  });

  return (
    <div className="h-full max-h-full ">
      <div className="flex flex-col-reverse w-full h-full px-5 pb-5 overflow-y-scroll md:px-10">
        {
          loading ?
            <div className='flex items-center justify-center p-5'>
              <Loading />
            </div>
          :
            <>
              {messagesMap}
              <p className="my-3 text-center text-gray-400">Początek konwersacji</p>
            </>
        }
      </div>
    </div>
  );
};

export default Messages;
