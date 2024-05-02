import {  inject } from "@angular/core"
import { AccountService } from "./account/account.service"
import { Router,UrlTree  } from "@angular/router";
import { map } from "rxjs";


export const CanActivate=()=>{
    

    const router = inject(Router);
   
    const ww=localStorage.getItem('token');

    if( ww=== null)
    {
        router.navigate(['account/login']);
    }
   
}