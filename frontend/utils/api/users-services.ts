import { Ibook } from "@/features/books/types";
import { Ievent } from "@/features/events/types";
import { IlostItem } from "@/features/lost-items/types";
import { IprivateLesson } from "@/features/private-lessons/types";
import { Iuser, IuserInfo, IuserInfoLength } from "@/features/users/types";

const url = `${process.env.NEXT_PUBLIC_API_URL}/users`;

class UsersServices {
  async findAll(cache: RequestCache = 'no-store'): Promise<Iuser[]> {
    const data = await fetch(url, { cache });
    return data.json();
  }

  async findOne(id: string, cache: RequestCache = 'no-store'): Promise<Iuser> {
    const data = await fetch(`${url}/${id}`, { cache });
    return data.json();
  }

  async findUserAllInfo(id: string, cache: RequestCache = 'no-store'): Promise<IuserInfo> {
    const data = await fetch(`${url}/${id}/all`, { cache });
    return data.json();
  }

  async findUserAllInfoLength(id: string, cache: RequestCache = 'no-store'): Promise<IuserInfoLength> {
    const data = await fetch(`${url}/${id}/all/count`, { cache });
    return data.json();
  }

  async findUserBooks(id: string, cache: RequestCache = 'no-store'): Promise<Ibook[]> {
    const data = await fetch(`${url}/${id}/books`, { cache });
    return data.json();
  }

  async findUserEvents(id: string, cache: RequestCache = 'no-store'): Promise<Ievent[]> {
    const data = await fetch(`${url}/${id}/events`, { cache });
    return data.json();
  }

  async findUserLostItems(id: string, cache: RequestCache = 'no-store'): Promise<IlostItem[]> {
    const data = await fetch(`${url}/${id}/lost-items`, { cache });
    return data.json();
  }

  async findUserPrivateLessons(id: string, cache: RequestCache = 'no-store'): Promise<IprivateLesson[]> {
    const data = await fetch(`${url}/${id}/private-lessons`, { cache });
    return data.json();
  }

}

export default new UsersServices();
