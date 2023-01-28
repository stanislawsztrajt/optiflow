import React from 'react';
import useChatWindow from './use-chat-window';
import Messages from '../messages/messages';
import MessageInput from '../message-input/message-input';
import ChatsList from '../chats-list/chats-list';

interface Iprops {
  secondUserId?: string
}

const ChatWindow: React.FC<Iprops> = ({ secondUserId = 'NO_USER_ID' }) => {
  const noUserId = secondUserId === 'NO_USER_ID' ? true : false
  const { secondUser, loading } = useChatWindow({ secondUserId, noUserId })

  return (
    <div className='bg-white rounded-md h-1/2 w-[60rem] flex flex-row overflow-hidden text-gray-900 border shadow'>
      <div className='flex flex-col w-1/3 border-r'>
        <div className='w-full px-5 py-4 text-xl font-bold border-b'>
          Wiadomości
        </div>
        <div className='h-[38.5rem] shadow-inner overflow-y-scroll'>
          <ChatsList />
        </div>
      </div>
      <div className='flex flex-col justify-between w-full'>
        <div className='w-full px-5 py-4 text-lg font-semibold'>
          {secondUser?.name} {secondUser?.surname} - {secondUser?.class}
        </div>
        <div className='h-[35rem] border-t border-b shadow-inner'>
          {
            !noUserId ?
              <Messages secondUserId={secondUserId} />
            :
              <div className='flex items-center justify-center w-full h-full'>
                <p className='text-lg font-semibold text-gray-400'>Wybierz konwersację z listy po lewej stronie</p>
              </div>
          }
        </div>
        <div className='w-full text-lg'>
          <MessageInput
            loading={loading}
            secondUserId={secondUserId}
            noUserId={noUserId}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
