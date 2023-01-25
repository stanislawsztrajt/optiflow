import { IprivateLesson } from "@/features/private-lessons/types";
import axios from "axios";
import { authHeader } from "../constans/user";
import { Iresponse } from "../types/api";

const url = `${process.env.NEXT_PUBLIC_API_URL}/private-lessons`;

class EventsServices {
  async create(privateLesson: IprivateLesson): Promise<IprivateLesson> {
    const { data }: Iresponse<IprivateLesson> = await axios.post(
      url,
      privateLesson,
      authHeader
    );
    return data;
  }

  async findAll(cache: RequestCache = "no-store"): Promise<IprivateLesson[]> {
    const data = await fetch(url, { cache });
    return data.json();
  }

  async findOne(
    id: string,
    cache: RequestCache = "no-store"
  ): Promise<IprivateLesson> {
    const data = await fetch(`${url}/${id}`, { cache });
    return data.json();
  }

  async update(
    privateLesson: IprivateLesson,
    id: string
  ): Promise<IprivateLesson> {
    const { data }: Iresponse<IprivateLesson> = await axios.patch(
      `${url}/${id}`,
      privateLesson,
      authHeader
    );
    return data;
  }

  async remove(id: string): Promise<IprivateLesson> {
    const { data }: Iresponse<IprivateLesson> = await axios.delete(
      `${url}/${id}`,
      authHeader
    );
    return data;
  }
}

export default new EventsServices();
