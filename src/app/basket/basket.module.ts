import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketComponent } from './basket.component';
import { BasketRoutingModule } from './basket-routing.module';
import { SharedsModule } from '../shareds/shareds.module';



@NgModule({
  declarations: [
    BasketComponent
  ],
  imports: [
    CommonModule,
    BasketRoutingModule,
    SharedsModule
  ]
})
export class BasketModule { }
