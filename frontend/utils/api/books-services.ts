import { Ibook } from "@/features/books/types";
import axios from "axios";
import { authHeader } from "../constans/user";
import { Iresponse } from "../types/api";

const url = `${process.env.NEXT_PUBLIC_API_URL}/books`;

class BooksServices {
  async create(book: Ibook): Promise<Ibook> {
    const { data }: Iresponse<Ibook> = await axios.post(url, book, authHeader);
    return data;
  }

  async findAll(cache: RequestCache = "no-store"): Promise<Ibook[]> {
    const data = await fetch(url, { cache });
    return await data.json();
  }

  async findOne(id: string, cache: RequestCache = "no-store"): Promise<Ibook> {
    const data = await fetch(`${url}/${id}`, { cache });
    return await data.json();
  }

  async update(book: Ibook, id: string): Promise<Ibook> {
    const { data }: Iresponse<Ibook> = await axios.patch(
      `${url}/${id}`,
      book,
      authHeader
    );
    return data;
  }

  async remove(id: string): Promise<Ibook> {
    const { data }: Iresponse<Ibook> = await axios.delete(
      `${url}/${id}`,
      authHeader
    );
    return data;
  }
}

export default new BooksServices();
