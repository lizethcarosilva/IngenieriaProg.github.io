import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { GlobalMenuComponent } from './Components/global-menu/global-menu.component';
import { KpisComponent } from './Components/kpis/kpis.component';
import { AppRoutingModule } from './app.routes';
import { FuerzasPorterComponent } from './Components/fuerzas-porter/fuerzas-porter.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { PlanAccionComponent } from './Components/plan-accion/plan-accion.component';
import { ProductoComponent } from './Components/producto/producto.component';
import { QuienesSomosComponent } from './Components/quienes-somos/quienes-somos.component';
// Importa todos tus componentes aquí

@NgModule({
declarations: [

],

imports: [
  BrowserModule,
  AppRoutingModule,
  AppComponent,
  GlobalMenuComponent,
  InicioComponent,
  QuienesSomosComponent,
  FuerzasPorterComponent,
  PlanAccionComponent,
  KpisComponent
],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy } // Para GitHub Pages
  ],
})
export class AppModule { }
export { AppRoutingModule };

