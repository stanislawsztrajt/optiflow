import { Ibook } from '@/features/books/types';
import axios from 'axios'
import { Iresponse } from "../types/api";

const url = `${process.env.NEXT_PUBLIC_API_URL}/books`

class BooksServices {
  async create (book: Ibook): Promise<Ibook> {
    const { data }: Iresponse<Ibook> = await axios.post(url, book)
    return data
  }

  async findAll (): Promise<Ibook[]> {
    const { data }: Iresponse<Ibook[]> = await axios.get(url)
    return data
  }

  async findOne (id: string): Promise<Ibook> {
    const { data }: Iresponse<Ibook> = await axios.get(`${url}/${id}`)
    return data
  }

  async update (book: Ibook, id: string): Promise<Ibook> {
    const { data }: Iresponse<Ibook> = await axios.patch(`${url}/${id}`, book)
    return data
  }

  async remove (id: string): Promise<Ibook> {
    const { data }: Iresponse<Ibook> = await axios.delete(`${url}/${id}`)
    return data
  }
}

export default new BooksServices()