import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopsComponent } from './shops.component';
import { ShopsItemComponent } from './shops-item/shops-item.component';
import { SharedsModule } from '../shareds/shareds.module';



@NgModule({
  declarations: [
    ShopsComponent,
    ShopsItemComponent
  ],
  imports: [
    CommonModule,SharedsModule
  ],
  exports:[ShopsComponent]
})
export class ShopsModule { }
