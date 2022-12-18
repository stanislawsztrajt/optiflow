import { IloginDto, IloginResponse } from "@/features/authorization/types";
import axios from 'axios'
import { Iresponse } from "../types/api";

const url = `${process.env.NEXT_PUBLIC_API_URL}/auth`

class AuthServices {
  async login (loginDto: IloginDto): Promise<IloginResponse> {
    const { data }: Iresponse<IloginResponse> = await axios.post(`${url}/login`, loginDto)
    return data
  }
}

export default new AuthServices()