import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from 'src/app/clientes/cliente';

@Component({
  selector: 'app-servico-prestado-fom',
  templateUrl: './servico-prestado-fom.component.html',
  styleUrls: ['./servico-prestado-fom.component.css']
})
export class ServicoPrestadoFomComponent implements OnInit {

  clientes: Cliente[];

  constructor(private clientesService: ClientesService) { }

  ngOnInit(): void {
    this.clientesService.getClientes()
      .subscribe(
        res => this.clientes = res
      )
  }

  onSubmit(){
    
  }
}
