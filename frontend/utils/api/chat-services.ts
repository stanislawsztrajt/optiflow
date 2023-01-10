import { Ichat, Imessage } from "@/features/chat/types";
import axios from "axios";
import { authHeader } from "../constans/user";
import { Iresponse } from "../types/api";

const url = `${process.env.NEXT_PUBLIC_API_URL}/messages`;

class ChatServices {
  async findChats (userId: string): Promise<Ichat[]> {
    const { data }: Iresponse<Ichat[]> = await axios.get(`${url}/${userId}`, authHeader)
    return data;
  }

  async findChat (userId: string, secondUserId: string): Promise<Imessage[]> {
    const { data }: Iresponse<Imessage[]> = await axios.get(`${url}/${userId}/${secondUserId}`, authHeader)
    return data;
  }
}

export default new ChatServices();
