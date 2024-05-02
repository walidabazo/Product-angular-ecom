import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IDeliveryMethod } from '../../shareds/Models/Deliverymethods';
import { CheckoutService } from '../checkout.service';
import { BasketService } from '../../basket/basket.service';

@Component({
  selector: 'app-checkout-delivery',
  templateUrl: './checkout-delivery.component.html',
  styleUrl: './checkout-delivery.component.scss'
})
export class CheckoutDeliveryComponent implements OnInit {

  @Input() checkoutForm:FormGroup;
  deliveryMethods:IDeliveryMethod[];

  constructor(private checkoutServices:CheckoutService, private basketservives:BasketService){}
  ngOnInit(): void {
 this.checkoutServices.getDeliveryMethods().subscribe({
      next:(res:IDeliveryMethod[])=> {
        this.deliveryMethods = res;
      },
      error:(err)=>{console.error(err)}
    })
  }
  setShippingPrice(deliverymethod:IDeliveryMethod)
  {
    this.basketservives.setShippingPrice(deliverymethod);
  }

}
