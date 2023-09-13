import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { RegistroComponent } from './Components/registro/registro.component';
import { HomeComponent } from './Components/home/home.component';
import { PublicarComponent } from './Components/publicar/publicar.component';


import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './Components/shared/shared.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { Autorizacion } from './Service/Autorization.service';
import { Registro } from './Service/Registro.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    HomeComponent,
    PublicarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    NoopAnimationsModule
  ],
  providers: [
    Autorizacion,
    Registro
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
