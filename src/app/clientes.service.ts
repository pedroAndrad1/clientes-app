import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './clientes/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private httpClient: HttpClient) { }

  save(cliente: Cliente): Observable<Cliente>{
      return this.httpClient.post<Cliente>('http://localhost:8080/api/clientes', cliente);
  }

  getClientes(): Observable<Cliente[]>{
    return this.httpClient.get<Cliente[]>("http://localhost:8080/api/clientes");
  }
}
