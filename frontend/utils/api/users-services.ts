import { Iuser } from "@/features/users/types";
import axios from "axios";
import { Iresponse } from "../types/api";

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
}

export default new UsersServices();
