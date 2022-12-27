import { Iuser } from "@/features/users/types";
import axios from "axios";
import { Iresponse } from "../types/api";

const url = `${process.env.NEXT_PUBLIC_API_URL}/users`;

class UsersServices {
  async findAll(): Promise<Iuser[]> {
    const { data }: Iresponse<Iuser[]> = await axios.get(url);
    return data;
  }

  async findOne(id: string): Promise<Iuser> {
    const { data }: Iresponse<Iuser> = await axios.get(`${url}/${id}`);
    return data;
  }
}

export default new UsersServices();
