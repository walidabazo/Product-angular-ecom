import { Component, OnInit } from '@angular/core';
import { BasketService } from './basket/basket.service';
import { AccountService } from './account/account.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  implements OnInit {
  constructor(private basketservices:BasketService,private accountservices:AccountService)
  {}
  ngOnInit(): void {
    this.loadCurrentUser();
   this.basket();
    }
  basket() {
    const basketId = localStorage.getItem('basket_id');
    if (basketId) {
      this.basketservices.getBasket(basketId).subscribe({
        next: () => { console.log('intialBasket') },
        error: (err) => { console.error(err) }
      })
    }
  }
    loadCurrentUser()
    {
      const token =localStorage.getItem('token');
     // if(token)
     // {
        this.accountservices.loadCurrentUser(token).subscribe({
          next:()=>{console.log('loadded user')},
          error:(err)=>{console.log(err)}
        })
     // }
    }


  title = 'client';
}
