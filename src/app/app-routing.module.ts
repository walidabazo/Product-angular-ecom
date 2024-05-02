import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopsComponent } from './shops/shops.component';

import { TestErrorComponent } from './core/test-error/test-error.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { ServerErrorComponent } from './core/server-error/server-error.component';
import {CanActivate} from './auth.guard'



const routes: Routes = [
  {path:'', component:HomeComponent,data:{breadcrumb:'Home'}},
  {path:'not-found',component:NotFoundComponent,data:{breadcrumb:'Not Found'}},
  {path:'server-error',component:ServerErrorComponent,data:{breadcrumb:'Server Error'}},
  {path:'test-error',component:TestErrorComponent,data:{breadcrumb:'Test Error'}},
  {path:'shop', loadChildren:()=>import('./shops/shops.module').then(mo => mo.ShopsModule),data:{breadcrumb:'Shop'}},
  {path:'basket', loadChildren:()=>import('./basket/basket.module').then(mo => mo.BasketModule),data:{breadcrumb:'basket'}},
  {path:'checkout',canActivate:[CanActivate], loadChildren:()=>import('./checkout/checkout.module').then(mo => mo.CheckoutModule),data:{breadcrumb:'checkout'}},
  {path:'account', loadChildren:()=>import('./account/account.module').then(mo => mo.AccountModule),data:{breadcrumb:{skip:true}}},

  {path:'**', redirectTo:'', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
