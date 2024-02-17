import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBasket, IBasketItem } from '../shareds/Basket';
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
incrementBasketitemQuantity(item)
{
  this.basketservice.incrementBasketitemQuantity(item);
}
decrementBasketitemQuantity(item)
{
  this.basketservice.declarerementBasketitemQuantity(item);
}
removeBasketitem(item:IBasketItem)
{
  this.basketservice.removeItemFromBasket(item);
}
}
