import { Component, OnInit } from '@angular/core';
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

  constructor(private clientesService: ClientesService) { }

  ngOnInit(): void {
  }

  onSubmit(){
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
                        errorRes =>{
                          this.errors = errorRes.error.errors;
                          this.success = false;
                        } 
                      );
  }
}
