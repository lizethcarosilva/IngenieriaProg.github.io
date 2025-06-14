import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './Components/inicio/inicio.component';
import { QuienesSomosComponent } from './Components/quienes-somos/quienes-somos.component';
import { ProductoComponent } from './Components/producto/producto.component';
import { FuerzasPorterComponent } from './Components/fuerzas-porter/fuerzas-porter.component';
import { PlanAccionComponent } from './Components/plan-accion/plan-accion.component';
import { KpisComponent } from './Components/kpis/kpis.component';

export const routes: Routes = [
  { path: "", redirectTo: "/inicio", pathMatch: "full" },
  { path: "inicio", component: InicioComponent },
  { path: 'quienes-somos', component: QuienesSomosComponent },
  { path: 'producto', component: ProductoComponent },
  { path: 'fuerzas-porter', component: FuerzasPorterComponent },
  { path: 'plan-accion', component: PlanAccionComponent },
  { path: 'kpis', component: KpisComponent },
  { path: "**", redirectTo: "/inicio" } // Manejo de rutas no encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true, // Importante para GitHub Pages
    scrollPositionRestoration: 'enabled' // Mejor experiencia de navegación
  })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
