import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { IBasket, IBasketItem } from '../../Models/Basket';
import { BasketService } from '../../../basket/basket.service';


@Component({
  selector: 'app-basket-summery',
  templateUrl: './basket-summery.component.html',
  styleUrl: './basket-summery.component.scss'
})
export class BasketSummeryComponent implements OnInit {


  Basket$:Observable<IBasket>;
  @Output() decrement:EventEmitter<IBasketItem> = new EventEmitter<IBasketItem>();
  @Output() increment:EventEmitter<IBasketItem> = new EventEmitter<IBasketItem>();
  @Output() remove:EventEmitter<IBasketItem> = new EventEmitter<IBasketItem>();
  @Input() isBasket:boolean = true;



  constructor(private basketServices:BasketService){}
  ngOnInit(): void {
    this.Basket$ = this.basketServices.basket$;
  }
  decrementBasketItemQuantity(item:IBasketItem){
    this.decrement.emit(item);
  }
  incrementBasketItemQuantity(item:IBasketItem){
    this.increment.emit(item);
  }
  removeItemFromBasket(item:IBasketItem){
    this.remove.emit(item);
  }
}
