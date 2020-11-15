import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {

  clientes: Cliente[] = [];
  clienteSelecionado: Cliente; //Cliente selecionada para delecao

  constructor(private clientesService: ClientesService) { }


  ngOnInit(): void {
   this.clientesService.getClientes().subscribe(res => this.clientes = res);
  }

  preparaDelecao(cliente: Cliente): void{
    this.clienteSelecionado = cliente
  }

}
