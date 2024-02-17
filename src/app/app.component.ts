import { Component, OnInit } from '@angular/core';
import { BasketService } from './basket/basket.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  implements OnInit {
  constructor(private basketservices:BasketService)
  {}
  ngOnInit(): void {

    const basketId = localStorage.getItem('basket_id');
    if (basketId) {
      this.basketservices.getBasket(basketId).subscribe({
        next: () => { console.log('intialBasket') },
        error: (err) => { console.error(err) }
      })
    }
    }
  


  title = 'client';
}
