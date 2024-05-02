import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../account/account.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent implements OnInit {
checkoutForm:FormGroup;

constructor(private fb:FormBuilder, private accountServices:AccountService){}
  ngOnInit(): void {
    this.createcheckoutForm();
    this.getAddressFormValues();
  }
  getAddressFormValues()
  {
    this.accountServices.getUserAddrss().subscribe({
      next:((address)=>{this.checkoutForm.get('addressForm').patchValue(address)}),
      error:(err)=>{console.log(err)}
    })
  }

  createcheckoutForm()
  {
    this.checkoutForm=this.fb.group({
addressForm:this.fb.group({
  firstName:['',Validators.required],
  lastName:['',Validators.required],
  street:['',Validators.required],
  city:['',Validators.required],
  state:['',Validators.required],
  zipcode:['',Validators.required],
}),
deliveryForm:this.fb.group({
  deliveryMethod:['',Validators.required]
}),

paymentForm:this.fb.group({
  nameOnCard:['',Validators.required]
}),
    });
  }
}
