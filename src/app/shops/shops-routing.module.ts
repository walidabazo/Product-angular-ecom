import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShopsComponent } from './shops.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
 
  {path:'', component:ShopsComponent},
  {path:':id', component:ProductDetailsComponent,data:{breadcrumb:{alias:'ProductDetails'}}}
 
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})

export class ShopsRoutingModule { }
