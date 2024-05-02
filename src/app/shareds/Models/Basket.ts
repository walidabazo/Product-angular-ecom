import {v4 as uuid} from 'uuid';

export interface IBasket {
      id: string;
    basketItems: IBasketItem[];
  }
  
  export interface IBasketItem {
    id: number;
    productName: string;
    productPicture: string;
    price: number;
    category: string;
    quantity: number;
  }
  export class Basket implements IBasket {
    id= uuid();
    basketItems: IBasketItem[]=[];
  }
  export interface IBasketTotals
  {
    shipping:number;
    subtotal:number;
    total:number;
  }
  