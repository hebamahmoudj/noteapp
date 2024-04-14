import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  menuname:string="Login"
  username:any=null
  constructor(private router:Router,private auth:AuthService){
   this.auth.user.subscribe({next:(res)=>{this.username=res
  
  
  }})
    this.router.events.subscribe({next:(result)=>{if(result instanceof NavigationEnd){
      this.menuname=result.url.replace("/"," ").replace(result.url[1],result.url[1].toUpperCase())
    }}})}


}
