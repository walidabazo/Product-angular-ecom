import { Component, OnInit } from '@angular/core';
import { BasketService } from '../../../basket/basket.service';
import { Observable } from 'rxjs';
import { IBasketTotals } from '../../Models/Basket';

@Component({
  selector: 'app-order-totals',
  templateUrl: './order-totals.component.html',
  styleUrl: './order-totals.component.scss'
})
export class OrderTotalsComponent implements OnInit {

  basketTotal$:Observable<IBasketTotals>;
  constructor(private basketservice:BasketService)
  {}
  ngOnInit(): void {
   this.basketTotal$=this.basketservice.baskettotal$;
  }

}
