import { Ievent } from '@/features/events/types';
import axios from 'axios'
import { Iresponse } from "../types/api";

const url = `${process.env.NEXT_PUBLIC_API_URL}/events`

class EventsServices {
  async create (events: Ievent): Promise<Ievent> {
    const { data }: Iresponse<Ievent> = await axios.post(url, events)
    return data
  }

  async findAll (): Promise<Ievent[]> {
    const { data }: Iresponse<Ievent[]> = await axios.get(url)
    return data
  }

  async findOne (id: string): Promise<Ievent> {
    const { data }: Iresponse<Ievent> = await axios.get(`${url}/${id}`)
    return data
  }

  async update (events: Ievent, id: string): Promise<Ievent> {
    const { data }: Iresponse<Ievent> = await axios.patch(`${url}/${id}`, events)
    return data
  }

  async remove (id: string): Promise<Ievent> {
    const { data }: Iresponse<Ievent> = await axios.delete(`${url}/${id}`)
    return data
  }
}

export default new EventsServices()