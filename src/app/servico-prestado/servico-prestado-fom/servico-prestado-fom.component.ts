import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from 'src/app/clientes/cliente';
import { ServicoPrestado } from '../servico-prestado';

@Component({
  selector: 'app-servico-prestado-fom',
  templateUrl: './servico-prestado-fom.component.html',
  styleUrls: ['./servico-prestado-fom.component.css']
})
export class ServicoPrestadoFomComponent implements OnInit {

  clientes: Cliente[];
  servico: ServicoPrestado = new ServicoPrestado();
  constructor(private clientesService: ClientesService) { }

  ngOnInit(): void {
    this.clientesService.getClientes()
      .subscribe(
        res => this.clientes = res
      )
  }

  onSubmit(){
    console.log(this.servico);
  }
}
