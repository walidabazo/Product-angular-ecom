import { Component, Input, OnInit } from '@angular/core';
import { BasketService } from '../../basket/basket.service';
import { ToastrService } from 'ngx-toastr';
import { CdkStepper } from '@angular/cdk/stepper';

@Component({
  selector: 'app-checkout-review',
  templateUrl: './checkout-review.component.html',
  styleUrl: './checkout-review.component.scss'
})
export class CheckoutReviewComponent implements OnInit {
  @Input() appStepper:CdkStepper;
  constructor(private basketServices:BasketService,private torast:ToastrService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  
}
