import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './components/core/layouts/auth-layout/auth-layout.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { BlankLayoutComponent } from './components/core/layouts/blank-layout/blank-layout.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { authGuard } from './components/core/gurads/auth.guard';
const routes: Routes = [
  {path:"",component:AuthLayoutComponent,children:[
    {path:"",redirectTo:"login",pathMatch:"full"},
  {path:"login",component:LoginComponent,title:"login"},
  {path:"register",component:RegisterComponent,title:"register"}]
},
{path:"",component:BlankLayoutComponent,
canActivate:[authGuard],
children:[
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent,title:"home"},
]
},
{path:"**",component:NotfoundComponent,title:"notfound"}




];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
