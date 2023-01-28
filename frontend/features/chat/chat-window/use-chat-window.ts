"use client";

import { useState, useEffect } from "react";
import { Iuser } from "@/features/users/types";
import { useUser } from "@/utils/hooks";
import UsersServices from "@/utils/api/users-services";
import { socket } from "@/utils/socket";

interface Iprops {
  secondUserId: string;
  noUserId: boolean
}

const useChatWindow = (props: Iprops) => {
  const { secondUserId, noUserId } = props;
  const [loading, setLoading] = useState<boolean>(true);
  const { user } = useUser();
  const [secondUser, setSecondUser] = useState<Iuser>();

  const joinSocketRoom = () => {
    const roomId = [secondUserId, user?._id].sort().join("");
    socket?.emit("joinRoom", { room: roomId });
    setLoading(false);
  };

  const getSecondUser = async () => {
    const data: Iuser = await UsersServices.findOne(secondUserId);
    setSecondUser(data);
  };

  useEffect(() => {
    if(noUserId) return
    getSecondUser();
  }, []);

  useEffect(() => {
    if (user?._id && !noUserId) joinSocketRoom();
  }, [user]);

  return {
    user,
    secondUser,
    loading,
  };
};

export default useChatWindow;
