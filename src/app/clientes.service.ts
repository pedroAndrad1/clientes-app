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

  update(cliente: Cliente): Observable<Cliente>{
    return this.httpClient.put<Cliente>(`http://localhost:8080/api/clientes/${cliente.id}`, cliente);
}

  getClientes(): Observable<Cliente[]>{
    return this.httpClient.get<Cliente[]>("http://localhost:8080/api/clientes");
  }

  getClienteById(id: number): Observable<Cliente>{
    return this.httpClient.get<Cliente>(`http://localhost:8080/api/clientes/${id}`);
  }
  
  delete(id: Number): Observable<any>{
    return this.httpClient.delete<any>(`http://localhost:8080/api/clientes/${id}`);
  }
}