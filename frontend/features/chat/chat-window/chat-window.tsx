import React from 'react';
import useChatWindow from './use-chat-window';
import { Field, Form, Formik } from "formik";
import Messages from '../messages/messages';
import MessageInput from '../message-input/message-input';

interface Iprops {
  secondUserId: string
}

const ChatWindow: React.FC<Iprops> = ({ secondUserId }) => {
  const { secondUser, loading } = useChatWindow({ secondUserId })

  return (
    <div className='bg-gray-200 rounded-md shadow border h-1/2 w-[60rem] flex flex-row overflow-hidden text-gray-900'>
      <div className='flex flex-col w-1/3 border-r border-white'>
        <div className='w-full px-5 py-4 text-xl font-bold bg-red-400 border-b border-white'>
          Wiadomości
        </div>
        <div className='h-full'>
        </div>
      </div>
      <div className='flex flex-col justify-between w-full'>
        <div className='w-full px-5 py-4 text-lg font-semibold bg-red-400'>
          {secondUser?.name} {secondUser?.surname} - {secondUser?.class}
        </div>
        <div className='h-[35rem] border-t border-b border-white'>
          <Messages secondUserId={secondUserId} />
        </div>
        <div className='w-full text-lg'>
          <MessageInput loading={loading} secondUserId={secondUserId} />
        </div>
      </div>
    </div>
  )
}

export default ChatWindow;