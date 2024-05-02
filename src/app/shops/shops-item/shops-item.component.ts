import { Component, Input } from '@angular/core';
import { IProduct } from '../../shareds/Models/product';
import { BasketService } from '../../basket/basket.service';

@Component({
  selector: 'app-shops-item',
  templateUrl: './shops-item.component.html',
  styleUrl: './shops-item.component.scss'
})
export class ShopsItemComponent {
  constructor(private basketservices:BasketService)
  {}
  addItemToBasket()
  {
    this.basketservices.addItemToBasket(this.products);
  }
  @Input() products:IProduct;
}
