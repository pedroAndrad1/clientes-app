import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from 'src/app/clientes/cliente';
import { ServicoPrestadoService } from 'src/app/servico-prestado.service';
import { ServicoPrestado } from '../servico-prestado';

@Component({
  selector: 'app-servico-prestado-fom',
  templateUrl: './servico-prestado-fom.component.html',
  styleUrls: ['./servico-prestado-fom.component.css']
})
export class ServicoPrestadoFomComponent implements OnInit {

  clientes: Cliente[];
  servico: ServicoPrestado = new ServicoPrestado();
  success = false;
  errors: String[];

  constructor(
    private clientesService: ClientesService,
    private servicoPrestadoService: ServicoPrestadoService
    ) { }

  ngOnInit(): void {
    this.clientesService.getClientes()
      .subscribe(
        res => this.clientes = res
      )
  }

  onSubmit(){
    this.servicoPrestadoService.salvar(this.servico)
      .subscribe(
        res => {
          this.success = true;
          this.errors = [];
          //Limpando o formulario
          this.servico = new ServicoPrestado();
        },
        errorRes => {
          this.errors = errorRes.error.errors;
          this.success = false;
        }
      );
  }
}
