'use client'

import { featuresRoutes } from "@/utils/data/features-routes";
import { socket } from "@/utils/socket";
import Link from "next/link";
import React, { useEffect } from "react";


export default function Page() {
  let oneTime = false;
  useEffect(() => {
    if (!oneTime) {
      oneTime = true
      socket.emit('joinRoom', { userId: Math.random().toString(), room: '12' })
        // socket.emit('sendMessage', 'MESSAGE NIE')
        // socket.on('onlineUsers', (data: any) => console.log(data))
    }
  }, [])

  const teset = () => {
    // socket.emit('sendMessage', 'MESSAGE NIE')
    // socket.on('message', users => console.log('messages:',users))
    socket.emit('onlineUsers')
    socket.on('getOnlineUsers', users => console.log('users: ',users))
    // socket.on('getMessage', (message) => console.log('get message:', message))
  }

  const routes = featuresRoutes.map((route) => {
    return (
      <div key={route.name} className="flex flex-col items-center p-6 border rounded-input">
        <h1 className="font-bold">{route.name}</h1>
        <img src={route.image.src} className="w-56 h-56" />
        <Link className="button" href={route.mainRoute}>
          {route.viewName}
        </Link>
        <Link className="mt-2 button-bg" href={route.createRoute}>
          {route.createName}
        </Link>
      </div>
    );
  });

  return (
    <>
    <button onClick={teset}>asdfasdf;adklsj</button>
      <div className="flex items-center justify-center w-screen h-screen gap-32">
        {routes}
      </div>
    </>
  );
}
