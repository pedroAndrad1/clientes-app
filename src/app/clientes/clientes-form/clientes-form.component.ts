import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente = new Cliente();
  errors: String[];
  success = false;
  edit = false; //Para eu setar a pagina como edicao e trazer o id e cadastro sem a msg de sucesso

  constructor(
    private clientesService: ClientesService,
    private activedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    //Se for passado um id como parametro na URL, quer dizer que a pagina e de edicao de um cliente.
    //Entao devo traze-lo do back
    this.activedRoute.params.subscribe(
      params => {
        if (params["id"]) {
          this.clientesService.getClienteById(params["id"])
            .subscribe(
              res =>{
                this.cliente = res;
                this.edit = true;
              }
            )
        }
      }
    )

  }

  onSubmit() {
    //O  subscribe recebe tres callback's.
    //O de sucesso, o de erro e um que sera sempre executado.
    //E analogo ao then, catch e finallly do fetch
    this.clientesService.save(this.cliente)
      .subscribe(
        res => {
          console.log(res);
          this.success = true;
          this.cliente.id = res.id;
          this.cliente.dataCadastro = res.dataCadastro;
        },
        errorRes => {
          this.errors = errorRes.error.errors;
          this.success = false;
        }
      );
  }
}
