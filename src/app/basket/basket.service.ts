import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { BehaviorSubject, map } from 'rxjs';
import { Basket, IBasket, IBasketItem, IBasketTotals } from '../shareds/Models/Basket';
import { IProduct } from '../shareds/Models/product';
import { IDeliveryMethod } from '../shareds/Models/Deliverymethods';

@Injectable({
  providedIn: 'root'
})

export class BasketService {

  baseURL: string = environment.baseURL;
  private basketSource = new BehaviorSubject<IBasket>(null);
  basket$ = this.basketSource.asObservable();
shipping:number=0;


setShippingPrice(deliverymethod:IDeliveryMethod)
{
  this.shipping=deliverymethod.price;
  this.calculatetotal();
}
  incrementBasketItemQuantity(item: IBasketItem) {
    const basket = this.getCurrentBasketValue();
    const itemIndex = basket.basketItems.findIndex(x => x.id === item.id);
    basket.basketItems[itemIndex].quantity++;
    this.setBasket(basket);
  }

  decrementBasketItemQuantity(item: IBasketItem) {
    const basket = this.getCurrentBasketValue();
    const itemIndex = basket.basketItems.findIndex(x => x.id === item.id);
    if (basket.basketItems[itemIndex].quantity > 1) {
      basket.basketItems[itemIndex].quantity--;
      this.setBasket(basket);
    }
    else {
      this.removeBasketItem(item)
    }

   
   
  }
  removeBasketItem(item: IBasketItem) {
    const basket = this.getCurrentBasketValue();
    if (basket.basketItems.some(x => x.id === item.id)) 
    {
      basket.basketItems = basket.basketItems.filter(x => x.id !== item.id);
      if (basket.basketItems.length > 0) {
        this.setBasket(basket);
      }
      else {
        this.deleteBasket(basket);
      }
    }

  }
  deletLocalBasket(id:string) {
    this.basketSource.next(null);
    this.baskettotalsource.next(null);
    localStorage.removeItem('basket_id');
  }
  deleteBasket(basket: IBasket) {
    return this.http.delete(this.baseURL + 'Basket/delete-basket-item/' + basket.id).subscribe({
      next: () => {
        this.basketSource.next(null);
        this.baskettotalsource.next(null);
        localStorage.removeItem('basket_id');
      },
      error: (err) => { console.log(err) },

    });

  }

  //Basket Total
  private baskettotalsource = new BehaviorSubject<IBasketTotals>(null);
  baskettotal$ = this.baskettotalsource.asObservable();
  private calculatetotal() {
    const basket = this.getCurrentBasketValue();
    const shipping = this.shipping;
    const subtotal = basket.basketItems.reduce((a, c) => {
      return (c.price * c.quantity) + a;
    }, 0)
    const total = shipping + subtotal;
    this.baskettotalsource.next({ shipping, subtotal, total });

  }

  constructor(private http: HttpClient) { }

  //Get Basket
  getBasket(id: string) {
    return this.http.get(this.baseURL + 'Basket/get-basket-item/' + id).pipe(
      map((basket: IBasket) => {
        this.basketSource.next(basket);
        this.calculatetotal();
      })
    )
  }

  // Set Basket
  setBasket(basket: IBasket) {
    return this.http.post(this.baseURL + 'Basket/update-basket/', basket).subscribe({
      next: (res: IBasket) => {
        this.basketSource.next(res);
        this.calculatetotal();
        console.log(res)
      },
      error: (err) => { console.log(err) }

    })
  }
  //Basket Value
  getCurrentBasketValue() {
    return this.basketSource.value;
  }
  // Add To Basket
  addItemToBasket(item: IProduct, quantity: number = 1) {
    const ItemToAdd: IBasketItem = this.MapProductItemToBasketItem(item, quantity);
    const basket = this.getCurrentBasketValue() ?? this.CreateBascket();
    basket.basketItems = this.AddOrUpdate(basket.basketItems, ItemToAdd, quantity);
    return this.setBasket(basket);
  }
  private AddOrUpdate(basketItems: IBasketItem[], ItemToAdd: IBasketItem, quantity: number): IBasketItem[] {
    const index = basketItems.findIndex(i => i.id === ItemToAdd.id);
    if (index === -1) {
      ItemToAdd.quantity = quantity;
      basketItems.push(ItemToAdd);
    }
    else {
      basketItems[index].quantity += quantity;
    }
    return basketItems;
  }
  //  Create Bascket
  private CreateBascket(): IBasket {
    const basket = new Basket();
    localStorage.setItem('basket_id', basket.id);
    return basket;
  }
  // MapProductItem
  private MapProductItemToBasketItem(item: IProduct, quantity: number): IBasketItem {
    return {
      id: item.id,
      productName: item.name,
      price: item.price,
      productPicture: item.productPicture,
      category: item.categoryName,
      quantity
    }

  }
}
