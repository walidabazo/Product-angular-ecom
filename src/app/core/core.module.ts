import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VarBarComponent } from './var-bar/var-bar.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';



@NgModule({
  declarations: [
    VarBarComponent,
    FooterBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:
  [    VarBarComponent,
    FooterBarComponent]
})
export class CoreModule { }
