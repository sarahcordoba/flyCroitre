import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CambiarClaveComponent } from './cambiar-clave/cambiar-clave.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { LoginComponent } from './login/login.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';
import { SessionGuard } from 'src/app/guards/session.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: "logout",
    component: CerrarSesionComponent,
    canActivate: [SessionGuard]
  },{
    path: 'cambiar-clave',
    component: CambiarClaveComponent,
  },{
    path: 'recuperar-clave',
    component: RecuperarClaveComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
