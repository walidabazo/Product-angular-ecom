import { Component, Input } from '@angular/core';
import { IProduct } from '../../shareds/product';

@Component({
  selector: 'app-shops-item',
  templateUrl: './shops-item.component.html',
  styleUrl: './shops-item.component.scss'
})
export class ShopsItemComponent {
  @Input() products:IProduct;
}
