import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../account.service';
import {  Router } from '@angular/router';
import { ConfirmPassowrd } from '../../shareds/Validators/Password.Validators';
import { EmailValidator } from '../../shareds/Validators/validateEmailNotToken.validate';



@Component({
  selector: 'app-reqister',
  templateUrl: './reqister.component.html',
  styleUrl: './reqister.component.scss'
})
export class ReqisterComponent implements OnInit {
  errors:string[];
  registerForm:FormGroup;


  
 constructor(private accountService:AccountService,private router:Router, private fb:FormBuilder,
  private emailvalidator:EmailValidator
  )
 {}

  ngOnInit(): void {
    this.CreateRequister()
  }
  CreateRequister() {
    this.registerForm = this.fb.group({
      displayName:['',[Validators.required,Validators.minLength(3)]],
      email:['',[Validators.required,Validators.pattern('^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$')]
      ,[this.emailvalidator.ValidateEmailNotToken()]],
      
      password:['',[Validators.required]],
      confirmPassword:['',[Validators.required]]
    },{validators:[ConfirmPassowrd]})
  }
  get _displayName()
  {
    return this.registerForm.get('displayName')
  }
  get _email()
  {
    return this.registerForm.get('email')
  }
  get _password()
  {
    return this.registerForm.get('password')
  }
  get _confirmPassword()
  {
    return this.registerForm.get('confirmPassword')
  }

  Onsubmit()
  {
    this.accountService.register(this.registerForm.value).subscribe({
      next:(()=>{this.router.navigateByUrl('/shop')}),
      error:((err)=>{
        console.log(err);
        this.errors= err.errors})
    })
  }
}
