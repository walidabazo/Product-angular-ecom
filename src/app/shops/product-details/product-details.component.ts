import { Component, Input, OnInit } from '@angular/core';
import { ShopsService } from '../shops.service';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../shareds/product';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})

export class ProductDetailsComponent implements OnInit {
 product:IProduct;

 constructor(private shopservice:ShopsService, private activeroute:ActivatedRoute, 
  private bcservice:BreadcrumbService)
 {}
  ngOnInit(): void {
    this.loadproduct();
  }
 loadproduct()
  {
   this.shopservice.getproduct(parseInt(this.activeroute.snapshot.paramMap.get('id'))).subscribe
    (res=>{
      this.product=res;
      this.bcservice.set('@ProductDetails',res.name)
    
    });
 }
}
