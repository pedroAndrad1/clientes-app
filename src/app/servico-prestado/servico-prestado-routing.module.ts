import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { LayoutComponent } from '../layout/layout.component';
import { ServicoPrestadoFomComponent } from './servico-prestado-fom/servico-prestado-fom.component';
import { ServicoPrestadoListaComponent } from './servico-prestado-lista/servico-prestado-lista.component';

const routes: Routes = [
  //O Guard vale para as rotas filhas tbm
  {path: "servicos-prestados", component: LayoutComponent, canActivate:[AuthGuard],
    children: [
      {path:"form", component:ServicoPrestadoFomComponent},
      {path:"lista", component: ServicoPrestadoListaComponent},
      //pathMacth: Full para só redirecionar quando a url for exatamento a raiz (servicos-prestados) 
      //e nao apenas conter ela
      {path: '', redirectTo: "/servicos-prestados/lista", pathMatch: "full"}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicoPrestadoRoutingModule { }
