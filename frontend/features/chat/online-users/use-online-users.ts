"use client";

import { user } from "@/utils/constans/user";
import { socket } from "@/utils/socket";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadOnlineUsersIds } from "../chat-slice/chat-slice";

const useOnlineUsers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!socket || !user) return;
    console.log(socket)
    console.log('works')
    socket.emit("beOnline", { userId: user._id });
    socket.emit("onlineUsersIds");

    socket.on("getOnlineUsersIds", (users: string[]) => {
      console.log(users)
      dispatch(loadOnlineUsersIds(users));
    });

    setInterval(() => {
      socket?.emit("onlineUsersIds");
    }, 10000);
  }, []);

  return {};
};

export default useOnlineUsers;
