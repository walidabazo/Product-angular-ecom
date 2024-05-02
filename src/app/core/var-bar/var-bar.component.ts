import { Component, OnInit } from '@angular/core';
import { BasketService } from '../../basket/basket.service';
import { Observable } from 'rxjs';
import { IBasket } from '../../shareds/Models/Basket';
import { AccountService } from '../../account/account.service';
import { IUser } from '../../shareds/Models/User';

@Component({
  selector: 'app-var-bar',
  templateUrl: './var-bar.component.html',
  styleUrl: './var-bar.component.scss'
})
export class VarBarComponent implements  OnInit {
  constructor(private basketservices: BasketService, private accountService:AccountService){}
    basket$ : Observable<IBasket>;
    CurrentUser$:Observable<IUser>;


  ngOnInit(): void {
  this.basket$=this.basketservices.basket$ ;
  this.CurrentUser$=this.accountService.currentUSer$;
  }
  Logout()
  {
this.accountService.logout();
  }
}
