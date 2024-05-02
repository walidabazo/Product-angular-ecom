import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VarBarComponent } from './var-bar/var-bar.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { RouterModule } from '@angular/router';
import { TestErrorComponent } from './test-error/test-error.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServerErrorComponent } from './server-error/server-error.component';
import { ToastrModule } from 'ngx-toastr';
import { SectionHeaderComponent } from './section-header/section-header.component';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { SharedsModule } from '../shareds/shareds.module';




@NgModule({
  declarations: [
   
    VarBarComponent,
    FooterBarComponent,
    TestErrorComponent,
    NotFoundComponent,
    ServerErrorComponent,
    SectionHeaderComponent
 
  ],
  imports: [
    ToastrModule .forRoot(
      {
        positionClass:'toast-bottom-right',
        countDuplicates:true,
        preventDuplicates:false
      }
      ),
    CommonModule,
    RouterModule,
    BreadcrumbModule,
    SharedsModule
  ],
  exports:
  [    VarBarComponent,
    FooterBarComponent,
SectionHeaderComponent
  ]
})
export class CoreModule { }
