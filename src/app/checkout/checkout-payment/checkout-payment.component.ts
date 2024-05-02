import { Component, Input, OnInit, input } from '@angular/core';
import { CheckoutService } from '../checkout.service';
import { BasketService } from '../../basket/basket.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup } from '@angular/forms';
import { Basket, IBasket } from '../../shareds/Models/Basket';
import { Iorder } from '../../shareds/Models/Order';

@Component({
  selector: 'app-checkout-payment',
  templateUrl: './checkout-payment.component.html',
  styleUrl: './checkout-payment.component.scss'
})
export class CheckoutPaymentComponent implements OnInit {
  
  @Input() checkoutForm:FormGroup;
  constructor(private checkoutservices:CheckoutService, private basketServices : BasketService, private toastr:ToastrService)
  {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
submitOrder()
{
  const basket = this.basketServices.getCurrentBasketValue();
  const orderToCreatess = this.getOrderToCreate(basket);
  this.checkoutservices.createOrder(orderToCreatess).subscribe({
   next:((order:Iorder)=>{this.toastr.success('Order Submited Successfully');
   console.log(order);
              this.basketServices.deletLocalBasket(basket.id)}),
              error:((err)=>{this.toastr.error(err)})
  });
}
  private getOrderToCreate(basket: IBasket) {
   return{
    basketId:basket.id,

    deliveryMethodID:this.checkoutForm.get('deliveryForm.deliveryMethod').value,
 
    shipToAddress:this.checkoutForm.get('addressForm').value
   }
   
  }
}
