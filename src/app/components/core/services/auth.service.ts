import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user:BehaviorSubject<any>=new BehaviorSubject(null)

  constructor(private _HttpClient:HttpClient,private router:Router) {
    this.saveuserdata();
   }
  register(registerform:any):Observable<any>{
    return this._HttpClient.post('https://note-sigma-black.vercel.app/api/v1/users/signUp',registerform)
  }
  login(loginform:any):Observable<any>{
    return this._HttpClient.post('https://note-sigma-black.vercel.app/api/v1/users/signIn',loginform)
  }

  saveuserdata(){
    const token=localStorage.getItem('etoken');
    if(token !=null){
   const decodedtoken:any=jwtDecode(token)
   this.user.next(decodedtoken);
   
this.router.navigate(['/home'])
  }
  }
}
