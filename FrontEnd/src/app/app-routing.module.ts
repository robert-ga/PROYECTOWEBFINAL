import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './Componentes/login/login.component';
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
  {path:'mostrar', component: MostrarComponent, canActivate:[AuthGuard]},
  {path:'login', component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
