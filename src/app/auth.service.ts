import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from './login/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API_URL = environment.API_BASE + "/api/usuarios";

  constructor(private httpClient: HttpClient) { }

  salvar(usuario: Usuario): Observable<any>{
    return this.httpClient.post<any>(this.API_URL, usuario);
  }


}
