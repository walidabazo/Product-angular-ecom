import { Component, OnInit } from '@angular/core';
import { BasketService } from '../../basket/basket.service';
import { Observable } from 'rxjs';
import { IBasket } from '../../shareds/Basket';

@Component({
  selector: 'app-var-bar',
  templateUrl: './var-bar.component.html',
  styleUrl: './var-bar.component.scss'
})
export class VarBarComponent implements  OnInit {
  constructor(private basketservices: BasketService){}
    basket$ : Observable<IBasket>;

  ngOnInit(): void {
  this.basket$=this.basketservices.basket$ ;
  }

}
