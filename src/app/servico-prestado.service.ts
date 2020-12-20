import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ServicoPrestado } from './servico-prestado/servico-prestado';
import { ServicoPrestadoRegistro } from './servico-prestado/servico-prestado-lista/servico-prestado-registro';

@Injectable({
  providedIn: 'root'
})
export class ServicoPrestadoService {

  API_URL = environment.API_BASE + "/api/servicos-prestados"

  constructor(private httpClient: HttpClient) { }

  salvar(servico: ServicoPrestado): Observable<ServicoPrestado>{
    return this.httpClient.post<ServicoPrestado>(this.API_URL, servico);
  }

  buscar(nome: string, mes: Number): Observable<ServicoPrestadoRegistro[]>{

    if(!nome) nome = ""

    let mesFormatado: string;
    (!mes)? mesFormatado = "" : mesFormatado = mes.toString();

    const params = new HttpParams().set("nome", nome).set("mes", mesFormatado);
    const url = this.API_URL + "?" + params.toString();

    return this.httpClient.get<ServicoPrestadoRegistro[]>(url);

  }

  buscarTodos():Observable<ServicoPrestadoRegistro[]>{
    return this.httpClient.get<ServicoPrestadoRegistro[]>(`${this.API_URL}/all`);
  }

 // topFiveServicoValor(){
 //   return this.httpClient.get<ServicoPrestadoRegistro[]>(`${this.API_URL}/top-five`);
 // }
}
