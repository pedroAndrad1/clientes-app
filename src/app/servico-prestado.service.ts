import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ServicoPrestado } from './servico-prestado/servico-prestado';

@Injectable({
  providedIn: 'root'
})
export class ServicoPrestadoService {

  API_URL = environment.API_BASE + "/api/servicos-prestados"

  constructor(private httpClient: HttpClient) { }

  salvar(servico: ServicoPrestado): Observable<ServicoPrestado>{
    return this.httpClient.post<ServicoPrestado>(this.API_URL, servico);
  }

}
