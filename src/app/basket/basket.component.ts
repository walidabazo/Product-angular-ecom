import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBasket, IBasketItem } from '../shareds/Models/Basket';
import { BasketService } from './basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.scss'
})
export class BasketComponent implements OnInit {
  Basket$:Observable<IBasket>;
  constructor(private basketservice:BasketService)
 {}

  ngOnInit(): void {
  this.Basket$=this.basketservice.basket$;
  }

  

  incrementBasketItemQuantity(item:IBasketItem){
    this.basketservice.incrementBasketItemQuantity(item);
  }
  decrementBasketItemQuantity(item:IBasketItem){
    this.basketservice.decrementBasketItemQuantity(item);
  }
  removeBasketItem(item:IBasketItem){
    this.basketservice.removeBasketItem(item);
  }


}
