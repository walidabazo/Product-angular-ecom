import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AccountService } from '../../account/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-checkout-address',
  templateUrl: './checkout-address.component.html',
  styleUrl: './checkout-address.component.scss'
})
export class CheckoutAddressComponent implements OnInit {
  @Input() checkoutForm:FormGroup;

  constructor (private accountservices:AccountService, private toastr:ToastrService)
  {}
  ngOnInit(): void {
   this.SaveUserAddress()
  }
  SaveUserAddress()
  {
    let _currentAddress= this.checkoutForm.get('addressForm').value;
    this.accountservices.updateUserAddress(_currentAddress).subscribe({
      next:(()=>{this.toastr.success('Updated Successfully')}),
      error:((err)=>this.toastr.error(err))
    })
  }

  get _firstName() {
    return this.checkoutForm.get('addressForm.firstName');
  }
  get _lastName() {
    return this.checkoutForm.get('addressForm.lastName');
  }
  get _street() {
    return this.checkoutForm.get('addressForm.street');
  }
  get _state() {
    return this.checkoutForm.get('addressForm.state');
  }
  get _city() {
    return this.checkoutForm.get('addressForm.city');
  }
  get _zipcode() {
    return this.checkoutForm.get('addressForm._zipcode');
  }
}
