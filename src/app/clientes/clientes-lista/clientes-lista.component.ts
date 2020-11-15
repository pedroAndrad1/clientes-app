import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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

  constructor(
    private clientesService: ClientesService,
    private toastr: ToastrService
    ) { }


  ngOnInit(): void {
   this.clientesService.getClientes().subscribe(res => this.clientes = res);
   
  }

  preparaDelecao(cliente: Cliente): void{
    this.clienteSelecionado = cliente
  }

  deletaCliente(): void{
    this.clientesService.delete(this.clienteSelecionado.id)
      .subscribe(
        res =>{
          this.toastr.success("Cliente deletado com sucesso!", "Sucesso");
          this.ngOnInit(); //Para recarregar a lista de clientes
        },
        error => this.toastr.error("Não foi possível deletar o cliente", "Erro!")
      )
  }

}
