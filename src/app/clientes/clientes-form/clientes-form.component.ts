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

  constructor(private clientesService: ClientesService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.clientesService.save(this.cliente)
                      .subscribe( res => console.log(res));
  }
}
