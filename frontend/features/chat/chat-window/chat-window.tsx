import React from "react";
import useChatWindow from "./use-chat-window";
import Messages from "../messages/messages";
import MessageInput from "../message-input/message-input";
import ChatsList from "../chats-list/chats-list";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface Iprops {
  secondUserId?: string;
}

const ChatWindow: React.FC<Iprops> = ({ secondUserId = "NO_USER_ID" }) => {
  const noUserId = secondUserId === "NO_USER_ID" ? true : false;
  const { secondUser, loading, openMobileMenu, setOpenMobileMenu, isDeviceMobile } = useChatWindow({ secondUserId, noUserId });

  return (
    <div className="bg-white rounded-md h-1/2 w-11/12 md:w-3/4 lg:w-[60rem] flex flex-row overflow-hidden text-gray-900 border shadow">
      <div className="flex-col hidden w-1/3 border-r lg:flex">
        <div className="w-full px-5 py-4 text-xl font-bold border-b">
          Wiadomości
        </div>
        <div className="h-[38.5rem] shadow-inner overflow-y-scroll">
          <ChatsList />
        </div>
      </div>
      <div className="flex flex-col justify-between w-full">
        <div className="flex items-center justify-between w-full px-5 py-4 text-lg font-semibold">
          {secondUser?.name} {secondUser?.surname} - {secondUser?.class}
          <button
            onClick={() => setOpenMobileMenu(openMobileMenu => !openMobileMenu)}
            className="block text-xl cursor-pointer lg:hidden"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <div className="h-[35rem] border-t border-b shadow-inner">
          {
            !noUserId && !openMobileMenu ?
              <Messages secondUserId={secondUserId} />
            :
              <div className="flex items-center justify-center w-full h-full">
                {
                  openMobileMenu ?
                    <div className='w-full h-full'>
                      <ChatsList />
                    </div>
                  :
                    <p className="text-lg font-semibold text-gray-400 lg:block">
                      Wybierz konwersację
                    </p>
                }
            </div>
          }
        </div>
        <div className="w-full text-lg">
          <MessageInput
            loading={loading}
            secondUserId={secondUserId}
            disableInput={noUserId || openMobileMenu}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
