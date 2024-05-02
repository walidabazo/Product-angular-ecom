import { Injectable, OnInit } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { IDeliveryMethod } from '../shareds/Models/Deliverymethods';
import { map } from 'rxjs';
import { IOrderToCreate, Iorder } from '../shareds/Models/Order';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService implements OnInit {

  _baseURL = environment.baseURL;
  constructor(private http:HttpClient) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  getDeliveryMethods()
  {
    return this.http.get(this._baseURL +'Order/get-delivery-method').pipe(map((res:IDeliveryMethod[])=>{
      return res.sort((a,b)=>b.price-a.price)
    }))
  }
  createOrder(order:IOrderToCreate)
  {
  return this.http.post(this._baseURL+'Order/Create-Order',order);
  }
}
