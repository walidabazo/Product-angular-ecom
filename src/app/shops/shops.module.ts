import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopsComponent } from './shops.component';
import { ShopsItemComponent } from './shops-item/shops-item.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SharedsModule } from '../shareds/shareds.module';
import { RouterModule } from '@angular/router';
import { ShopsRoutingModule } from './shops-routing.module';





@NgModule({
  declarations: [
    ShopsComponent,
    ShopsItemComponent,
    ProductDetailsComponent,

  ],
  imports: [
    CommonModule,SharedsModule,ShopsRoutingModule
  ],
  exports:[]
})
export class ShopsModule { }
