"use client";

import { useState, useEffect } from "react";
import { Iuser } from "@/features/users/types";
import { useUser } from "@/utils/hooks";
import UsersServices from "@/utils/api/users-services";
import { socket } from "@/utils/socket";
import { useRouter } from "next/navigation";

interface Iprops {
  secondUserId: string;
  noUserId: boolean;
}

const useChatWindow = (props: Iprops) => {
  const { secondUserId, noUserId } = props;
  const { user } = useUser();
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(true);
  const [secondUser, setSecondUser] = useState<Iuser>();
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);
  // 1024px is also "lg" breakpoint in TailwindCSS
  let isDeviceMobile

  useEffect(() => {
    if (typeof window === 'undefined') return
    isDeviceMobile = window.innerWidth < 1024
  }, [])

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
    if (noUserId) return;
    getSecondUser();
  }, []);

  useEffect(() => {
    if (user?._id && !noUserId)
      if(user?._id === secondUserId) router.push("/chat");
      joinSocketRoom();
  }, [user]);

  return {
    user,
    secondUser,
    loading,
    setOpenMobileMenu,
    openMobileMenu,
    isDeviceMobile
  };
};

export default useChatWindow;
