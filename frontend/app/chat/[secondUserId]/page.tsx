'use client';

import React from "react";
import ChatWindow from "@/features/chat/chat-window/chat-window";

interface Iprops {
  params: {
    secondUserId: string
  }
}

export default function ChatPropPage(props:Iprops) {
  const { params } = props

  return <>
    <div className='flex items-center justify-center min-h-screen bg-gray-50 pt-14'>
      <ChatWindow secondUserId={params.secondUserId} />
    </div>
  </>;
}
