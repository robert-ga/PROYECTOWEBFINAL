import { MostrarComponent } from './Componentes/mostrar/mostrar.component';
import { ModificarComponent } from './Componentes/modificar/modificar.component';
import { AgregarComponent } from './Componentes/agregar/agregar.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [  //asignamos las rutas
  {path:'', redirectTo:'/inicio', pathMatch:'full'},
  {path:'inicio', component: InicioComponent},
  {path:'add', component: AgregarComponent},
  {path:'edit/:id', component: ModificarComponent},
  {path:'mostrar', component: MostrarComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
