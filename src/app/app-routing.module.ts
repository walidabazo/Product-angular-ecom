import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopsComponent } from './shops/shops.component';
import { ProductDetailsComponent } from './shops/product-details/product-details.component';
import { TestErrorComponent } from './core/test-error/test-error.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { ServerErrorComponent } from './core/server-error/server-error.component';



const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'not-found',component:NotFoundComponent},
  {path:'server-error',component:ServerErrorComponent},
  {path:'test-error',component:TestErrorComponent},
  {path:'shop', loadChildren:()=>import('./shops/shops.module').then(mo => mo.ShopsModule)},
 // {path:'shop/:id', component:ProductDetailsComponent},
  {path:'**', redirectTo:'', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
