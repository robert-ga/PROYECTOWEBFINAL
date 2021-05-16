import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { AgregarComponent } from './Componentes/agregar/agregar.component';
import { ModificarComponent } from './Componentes/modificar/modificar.component';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MostrarComponent } from './Componentes/mostrar/mostrar.component';
import { LoginComponent } from './Componentes/login/login.component';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AgregarComponent,
    ModificarComponent,
    MostrarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule //para validaciones

  ],
  providers: [
    {provide:JWT_OPTIONS, useValue:JWT_OPTIONS},
    JwtHelperService //sericio para decodificar tokken
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
