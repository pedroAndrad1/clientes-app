import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from './clientes/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  API_URL = environment.API_BASE + "/api/clientes"

  constructor(private httpClient: HttpClient) { }

  save(cliente: Cliente): Observable<Cliente>{
      return this.httpClient.post<Cliente>(this.API_URL, cliente);
  }

  update(cliente: Cliente): Observable<Cliente>{
    return this.httpClient.put<Cliente>(`${this.API_URL}/${cliente.id}`, cliente);
}

  getClientes(): Observable<Cliente[]>{
    return this.httpClient.get<Cliente[]>(this.API_URL);
  }

  getClienteById(id: number): Observable<Cliente>{
    return this.httpClient.get<Cliente>(`${this.API_URL}/${id}`);
  }
  
  delete(id: Number): Observable<any>{
    return this.httpClient.delete<any>(`${this.API_URL}/${id}`);
  }
}