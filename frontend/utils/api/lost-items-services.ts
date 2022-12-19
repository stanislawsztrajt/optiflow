import { IlostItem } from '@/features/lost-items/types';
import axios from 'axios'
import { Iresponse } from "../types/api";

const url = `${process.env.NEXT_PUBLIC_API_URL}/lost-items`

class EventsServices {
  async create (lostItem: IlostItem): Promise<IlostItem> {
    const { data }: Iresponse<IlostItem> = await axios.post(url, lostItem)
    return data
  }

  async findAll (): Promise<IlostItem[]> {
    const { data }: Iresponse<IlostItem[]> = await axios.get(url)
    return data
  }

  async findOne (id: string): Promise<IlostItem> {
    const { data }: Iresponse<IlostItem> = await axios.get(`${url}/${id}`)
    return data
  }

  async update (lostItem: IlostItem, id: string): Promise<IlostItem> {
    const { data }: Iresponse<IlostItem> = await axios.patch(`${url}/${id}`, lostItem)
    return data
  }

  async remove (id: string): Promise<IlostItem> {
    const { data }: Iresponse<IlostItem> = await axios.delete(`${url}/${id}`)
    return data
  }
}

export default new EventsServices()