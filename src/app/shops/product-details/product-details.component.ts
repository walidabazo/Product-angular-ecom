import { Component, Input, OnInit } from '@angular/core';
import { ShopsService } from '../shops.service';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../shareds/Models/product';
import { BreadcrumbService } from 'xng-breadcrumb';
import { BasketService } from '../../basket/basket.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})

export class ProductDetailsComponent implements OnInit {
  product: IProduct;
  quantity: number = 1;

  constructor(private shopservice: ShopsService, private activeroute: ActivatedRoute,
    private bcservice: BreadcrumbService, private basketService: BasketService) { }

  ngOnInit(): void {
    this.loadproduct();
  }
  loadproduct() {
    this.shopservice.getproduct(parseInt(this.activeroute.snapshot.paramMap.get('id'))).subscribe
      (res => {
        this.product = res;
        this.bcservice.set('@ProductDetails', res.name)

      });
  }
  additemTobasket() {
    this.basketService.addItemToBasket(this.product, this.quantity);
  }
  incrementQuantity() {
    this.quantity++;
  }
  decrementQuantity() {
    if (this.quantity > 1) {
      this.quantity--;

    }
  }
}
