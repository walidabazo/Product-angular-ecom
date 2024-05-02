import { Injectable } from "@angular/core";
import { AccountService } from "../../account/account.service";
import { AsyncValidatorFn } from "@angular/forms";
import { map, of, switchMap, timer } from "rxjs";

@Injectable({providedIn:'root'})
export class EmailValidator {
    constructor(private accountServices:AccountService) {
        
    }

    ValidateEmailNotToken():AsyncValidatorFn {
 
        return contorls =>{
    
            return timer(1000).pipe(
                switchMap(()=>{
                    if(!contorls.value)
                    {
                        return of(null);
                    }
                    return this.accountServices.checkEmailExist(contorls.value).pipe(
                        map(res=>{
                            return res?{emailExists:true}:null;
                        })
                    )
                })
            )
        }
    }
}

