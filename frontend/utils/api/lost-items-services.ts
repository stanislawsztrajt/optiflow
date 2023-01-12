import { IlostItem } from "@/features/lost-items/types";
import axios from "axios";
import { authHeader } from "../constans/user";
import { Iresponse } from "../types/api";

const url = `${process.env.NEXT_PUBLIC_API_URL}/lost-items`;

class EventsServices {
  async create(lostItem: IlostItem): Promise<IlostItem> {
    const { data }: Iresponse<IlostItem> = await axios.post(
      url,
      lostItem,
      authHeader
    );
    return data;
  }

  async findAll(cache: RequestCache = 'no-store'): Promise<IlostItem[]> {
    const data = await fetch(url, { cache });
    return data.json();
  }

  async findOne(id: string, cache: RequestCache = 'no-store'): Promise<IlostItem> {
    const data = await fetch(`${url}/${id}`, { cache });
    return data.json();
  }

  async update(lostItem: IlostItem, id: string): Promise<IlostItem> {
    const { data }: Iresponse<IlostItem> = await axios.patch(
      `${url}/${id}`,
      lostItem,
      authHeader
    );
    return data;
  }

  async remove(id: string): Promise<IlostItem> {
    const { data }: Iresponse<IlostItem> = await axios.delete(
      `${url}/${id}`,
      authHeader
    );
    return data;
  }
}

export default new EventsServices();
