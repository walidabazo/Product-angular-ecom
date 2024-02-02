import { IProduct } from "./product"

export interface IPagination {
    pageSize: number
    pageNumber: number
    pageCount: number
    data: IProduct[]
  }