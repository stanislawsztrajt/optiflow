import { Ichat, Imessage } from "@/features/chat/types";
import { authHeader } from "../constans/user";

const url = `${process.env.NEXT_PUBLIC_API_URL}/messages`;

class ChatServices {
  async findChats(
    userId: string,
    cache: RequestCache = "no-store"
  ): Promise<Ichat[]> {
    const data = await fetch(`${url}/${userId}`, { cache, ...authHeader });
    return data.json();
  }

  async findChat(
    userId: string,
    secondUserId: string,
    cache: RequestCache = "no-store"
  ): Promise<Imessage[]> {
    const data = await fetch(`${url}/${userId}/${secondUserId}`, {
      cache,
      ...authHeader,
    });
    return data.json();
  }
}

export default new ChatServices();
