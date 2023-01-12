import { Ievent } from "@/features/events/types";
import axios from "axios";
import { authHeader } from "../constans/user";
import { Iresponse } from "../types/api";

const url = `${process.env.NEXT_PUBLIC_API_URL}/events`;

class EventsServices {
  async create(events: Ievent): Promise<Ievent> {
    const { data }: Iresponse<Ievent> = await axios.post(
      url,
      events,
      authHeader
    );
    return data;
  }

  async findAll(cache: RequestCache = 'no-store'): Promise<Ievent[]> {
    const data = await fetch(url, { cache });
    return data.json();
  }

  async findOne(id: string, cache: RequestCache = 'no-store'): Promise<Ievent> {
    const data = await fetch(`${url}/${id}`, { cache });
    return data.json();
  }

  async update(events: Ievent, id: string): Promise<Ievent> {
    const { data }: Iresponse<Ievent> = await axios.patch(
      `${url}/${id}`,
      events,
      authHeader
    );
    return data;
  }

  async remove(id: string): Promise<Ievent> {
    const { data }: Iresponse<Ievent> = await axios.delete(
      `${url}/${id}`,
      authHeader
    );
    return data;
  }
}

export default new EventsServices();
