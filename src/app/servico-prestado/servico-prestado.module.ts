import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicoPrestadoRoutingModule } from './servico-prestado-routing.module';
import { ServicoPrestadoFomComponent } from './servico-prestado-fom/servico-prestado-fom.component';
import { ServicoPrestadoListaComponent } from './servico-prestado-lista/servico-prestado-lista.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TemplateModule } from '../template/template.module';


@NgModule({
  declarations: [
    ServicoPrestadoFomComponent, 
    ServicoPrestadoListaComponent
  ],
  imports: [
    CommonModule,
    ServicoPrestadoRoutingModule,
    RouterModule,
    FormsModule,
    TemplateModule
  ],
  exports:[
    ServicoPrestadoFomComponent, 
    ServicoPrestadoListaComponent
  ],
})
export class ServicoPrestadoModule { }
