import { Component } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, FormBuilder, FormGroup} from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent { 
  constructor(private FB:FormBuilder,
  private _AuthService:AuthService,
  private _Router:Router,
  private toastr: ToastrService){}
hide:boolean=true
  registerForm:FormGroup=new FormGroup(
   {name:new FormControl(' ',[Validators.required,Validators.minLength(3),Validators.maxLength(8)]),
  
  
   email:new FormControl(' ',[Validators.required, Validators.email]),
   password:new FormControl(' ',[Validators.required]),
   age:new FormControl(' ',[Validators.required,Validators.min(18)]),
   phone:new FormControl(' ',[Validators.required,Validators.pattern('^[010|011|012|015][0-9]{10}$')])

  }
  
  
  )
  
  register(){
this._AuthService.register(this.registerForm.value).subscribe(
  {
  next:(res)=>{ 
  this.showSuccess();

  this._Router.navigate(['/login'])


},
error:(err)=>{
  console.log(err);
  
  this.showError(err.error.msg)
  
}

}

)
  }
  showSuccess() {
    this.toastr.success('welcome to our familly');
  }
  showError(msg:string) {
    this.toastr.error(msg)
  }

}
