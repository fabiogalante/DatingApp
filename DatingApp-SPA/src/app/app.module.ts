import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { TesteComponent } from './teste/teste.component';
import { NavComponent } from './nav/nav.component';
import {FormsModule} from '@angular/forms';
import {AuthService} from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import {ErrorInterceptorProvider} from './_services/error.interceptor';
import {AlertifyService} from './_services/alertify.service';

@NgModule({
   declarations: [
      AppComponent,
      TesteComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent
   ],
  imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
   ],
   providers: [
     AuthService,
     ErrorInterceptorProvider,
     AlertifyService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
