import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReqisterComponent } from './reqister/reqister.component';
import { AccountRoutingModule } from './account-routing.module';
import { SharedsModule } from '../shareds/shareds.module';



@NgModule({
  declarations: [
    LoginComponent,
    ReqisterComponent,
    
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    SharedsModule
  ]
})
export class AccountModule { }
