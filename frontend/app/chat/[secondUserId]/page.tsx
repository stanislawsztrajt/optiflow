'use client';

import React from "react";
import ChatWindow from "@/features/chat/chat-window/chat-window";

interface Iprops {
  params: {
    secondUserId: string
  }
}

export default function ChatPage(props:Iprops) {
  const { params } = props

  return <>
    <div className='flex items-center justify-center min-h-screen -mt-20 bg-gray-50 pt-14'>
      <ChatWindow secondUserId={params.secondUserId} />
    </div>
  </>;
}
