import { Injectable, OnInit } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { ReplaySubject, map, of } from 'rxjs';
import { IUser } from '../shareds/Models/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Route, Router } from '@angular/router';
import { IAddress } from '../shareds/Models/Address';

@Injectable({
  providedIn: 'root'
})
export class AccountService implements OnInit {
  

baseUrl= environment.baseURL;
private CurrentUser= new ReplaySubject<IUser>(1);
currentUSer$=this.CurrentUser.asObservable();
  constructor(private http:HttpClient,private router :Router) { }
  
  getUserAddrss()
  {
    return this.http.get<IAddress>(this.baseUrl+'Account/get-user-address');
  }
  updateUserAddress(address:IAddress)
  {
    return this.http.put<IAddress>(this.baseUrl+'Account/Update-user-address',address);
  }
  //requister 
  register(value: any) {
    return this.http.post(this.baseUrl + 'Account/Register', value).pipe(
      map((user: IUser) => {
        if (user) {
          localStorage.setItem('token', user.token);
          this.CurrentUser.next(user);
        }
      })
    )
  }
  //login
  login(value:any) 
  {
    return this.http.post(this.baseUrl+'Account/Login',value).pipe(map((user:IUser)=>{
      if(user)
      {
        localStorage.setItem('token',user.token);
        this.CurrentUser.next(user);
      }
    }))
  }
  // log out
  logout()
  {
    localStorage.removeItem('token');
    this.CurrentUser.next(null);
    this.router.navigateByUrl('/');
  }
  
  checkEmailExist(email: string) {
   
    return this.http.get(this.baseUrl + 'Account/check-email-exist?email=' + email);
    
  }


  getuserAddress()
  {
    return this.http.get<IAddress>(this.baseUrl+'Account/get-user-address');
  }
  UpdateUserAddress(address:IAddress)
  {
    return this.http.put<IAddress>(this.baseUrl+'Account/Update-user-address',address);
  }
  loadCurrentUser(token:string)
  {
    if(token===null)
    {
      this.CurrentUser.next(null);
      return of (null);
    }
    let headers = new HttpHeaders();
    headers = headers.set('Authorization',`Bearer ${token}`);
    return this.http.get(this.baseUrl+'Account/get-current-user',{headers}).pipe(
      map((user:IUser)=>{
        if(user){
          localStorage.setItem('token',user.token);
          this.CurrentUser.next(user);
        }
      })
    )
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
