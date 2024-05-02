import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ShopsService } from './shops.service';
import { IProduct } from '../shareds/Models/product';
import { ICategorys } from '../shareds/Models/Categorys';
import { ShopParamss } from '../shareds/Models/ShopParamss';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrl: './shops.component.scss'
})

export class ShopsComponent implements OnInit {

  products: IProduct[];
  categorysss: ICategorys[];
  @ViewChild('search') searchterms:ElementRef;
  ShopParamss = new ShopParamss;
  soreOptions =
    [
      { name: 'Name', value: 'Name' },
      { name: 'Price : Low to High', value: 'PriceAsc' },
      { name: 'Price : high to low', value: 'PriceDesc' }
    ]

  constructor(private shopsservices: ShopsService) { }
  ngOnInit(): void {
    this.getproduct();
    this.getcategoryes();
  }
  getproduct() {
    this.shopsservices.getproducts(this.ShopParamss).subscribe(res => {
      this.products = res.data
      this.ShopParamss.totalCount = res.pageCount;
      this.ShopParamss.pageNumber = res.pageNumber;
      this.ShopParamss.pageSize = res.pageSize;
    })
  }
  getcategoryes() {
    this.shopsservices.getcategorys().subscribe(res => { this.categorysss = [{ id: 0, name: 'All', description: '' }, ...res] })
  }
  oncategoryselect(categoryid: number) {
    //   this.ShopParams.pageNumber=1;
    this.ShopParamss.categoryid = categoryid;

    this.getproduct();
  }
  onsortSeleted(sort: Event) {
    let sortValue = (sort.target as HTMLInputElement).value;

    this.ShopParamss.sorting = sortValue;

    this.getproduct();
  }
  onPageChanged(event:any)
  {
    if(this.ShopParamss.pageNumber !==event){
      this.ShopParamss.pageNumber = event;
      this.getproduct(); 
    }
  }
  onsearch(Searchterm:any)
  {
    this.ShopParamss.search=Searchterm;
    console.log(Searchterm);
    this.getproduct();
  }
  onsearchinput()
  {

    this.ShopParamss.search=this.searchterms.nativeElement.value;
    console.log( this.ShopParamss.search);
    this.getproduct();
  }
}
