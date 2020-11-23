import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { ClientesFormComponent } from './clientes-form/clientes-form.component';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';

const routes: Routes = [
  {path: 'clientes', component: LayoutComponent, children: [
    {path: 'lista', component: ClientesListaComponent },
    {path: 'form', component: ClientesFormComponent},
    {path: 'form/:id', component: ClientesFormComponent},//Rota para edicao de clientes
    //pathMacth: Full para só redirecionar quando a url for exatamento a raiz (clientes) e nao apenas conter ela
    {path: '' , redirectTo: "/clientes/lista", pathMatch: "full"}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
