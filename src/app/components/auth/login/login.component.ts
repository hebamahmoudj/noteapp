import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private FB:FormBuilder,
    private _AuthService:AuthService,
    private _Router:Router,
    private toastr: ToastrService){}
  hide:boolean=true
    loginForm:FormGroup=new FormGroup(
     {
    
     email:new FormControl(' ',[Validators.required, Validators.email]),
     password:new FormControl(' ',[Validators.required]),
  
    }
    
    
    )
    
    login(){
  this._AuthService.login(this.loginForm.value).subscribe(
    {
    next:(res)=>{ 
    this.showSuccess();
    localStorage.setItem('etoken',res.token)
  this._AuthService.saveuserdata();
    
    this._Router.navigate(['/home'])
  
  
  },
  error:(err)=>{
    console.log(err);
    
    this.showError(err.error.msg)
    
  }
  
  }
  
  )
    }
    showSuccess() {
      this.toastr.success('welcome back');
    }
    showError(msg:string) {
      this.toastr.error(msg)
    }
  
  }
  