import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPagination } from '../shareds/Models/Paginations';
import { ICategorys } from '../shareds/Models/Categorys';
import { response } from 'express';
import { map } from 'rxjs/operators';
import {ShopParamss} from '../shareds/Models/ShopParamss'
import { IProduct } from '../shareds/Models/product';
@Injectable({
  providedIn: 'root'
})

export class ShopsService {
baseURL='https://localhost:44332/api/'
  constructor(private http:HttpClient)
   {}
    getproducts(ShopParamss:ShopParamss)
    {
      let params=new HttpParams();
      if(ShopParamss.categoryid !=0)
      {
        params =params.append('Categoryid',ShopParamss.categoryid.toString());
      }
      
        params =params.append('Sorting',ShopParamss.sorting.toString());
        params =params.append('PageNumber',ShopParamss.pageNumber.toString());
        params =params.append('Pagesize',ShopParamss.pageSize.toString());
        if(ShopParamss.search)
        {
          params =params.append('Search',ShopParamss.search);
        }
      return this.http.get<IPagination>(this.baseURL+'Product/get-all-products',{observe:'response',params})
      .pipe(map(response=>{return response.body}));
    }
    getcategorys()
    {
      return this.http.get<ICategorys[]>(this.baseURL+'Category/get-all-category');
    }
    getproduct(id:number)
    {
  return this.http.get<IProduct>(this.baseURL+'Product/get-product-by-id/'+id);

    }
}
