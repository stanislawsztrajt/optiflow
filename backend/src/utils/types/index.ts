import { Request } from "express"

export interface Irespnse<T> {
  data: T
}

export interface Irequest<T> extends Request {
  body: T
}