import { IAddress } from "./Address"


export interface IOrderToCreate {
    basketId: string
    deliveryMethodID: number
    shipToAddress: IAddress
  }


  export interface Iorder {
    orderId: number
    buyerEmail: string
    orderDate: string
    shipToAddress: IAddress
    deliveryMethod: string
    shippingPrice: number
    orderItems: IOrderItem[]
    subtotal: number
    total: number
    orderStatus: string
  }
  
 


  
  export interface IOrderItem {
    productItemid: number
    productItemName: string
    prictureUrl: string
    price: number
    quantity: number
  }
  