import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ToastrModule } from 'ngx-toastr';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NotedataComponent } from './components/notedata/notedata.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AuthLayoutComponent } from './components/core/layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './components/core/layouts/blank-layout/blank-layout.component';
import{HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import{ReactiveFormsModule} from'@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './components/core/pipes/search.pipe';
import { NgxSpinnerModule } from "ngx-spinner";
import { LoaderInterceptor } from './components/core/interceptors/loader.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    NotedataComponent,
    NavbarComponent,
    NotfoundComponent,
    AuthLayoutComponent,
    BlankLayoutComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,SweetAlert2Module.forRoot(),FormsModule,NgxSpinnerModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:LoaderInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
