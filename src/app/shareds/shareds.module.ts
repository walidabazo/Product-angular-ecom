import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { OrderTotalsComponent } from './Components/order-totals/order-totals.component';


@NgModule({
  declarations: [
    OrderTotalsComponent
  ],
  imports: [
    CommonModule,PaginationModule
  ],
  exports:[PaginationModule,OrderTotalsComponent]
})
export class SharedsModule { }
