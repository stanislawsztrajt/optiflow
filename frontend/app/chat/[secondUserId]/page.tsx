"use client";

import React from "react";
import ChatWindow from "@/features/chat/chat-window/chat-window";
import { isLoggedIn } from "@/utils/hooks/use-routes-guards";

interface Iprops {
  params: {
    secondUserId: string;
  };
}

export default function ChatPropPage(props: Iprops) {
  const { params } = props;
  isLoggedIn()

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-white pt-14">
        <ChatWindow secondUserId={params.secondUserId} />
      </div>
    </>
  );
}
