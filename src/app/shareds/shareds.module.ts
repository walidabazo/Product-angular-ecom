import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { OrderTotalsComponent } from './Components/order-totals/order-totals.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { StepperComponent } from './Components/stepper/stepper.component';
import { RouterModule } from '@angular/router';
import { BasketSummeryComponent } from './Components/basket-summery/basket-summery.component';




@NgModule({
  declarations: [
    OrderTotalsComponent,
    StepperComponent,
    BasketSummeryComponent
  ],
  imports: [
    CommonModule,
    PaginationModule,
    FormsModule,
    ReactiveFormsModule,
    CdkStepperModule,
RouterModule
  ],
  exports: [
    PaginationModule,
    OrderTotalsComponent,
    FormsModule,
    ReactiveFormsModule,
    CdkStepperModule,
    StepperComponent,
    BasketSummeryComponent
  ]

})
export class SharedsModule { }
