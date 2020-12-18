import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from './login/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API_URL = environment.API_BASE + "/api/usuarios";
  private TOKEN_URL = environment.API_BASE + environment.TOKEN_URL;

  constructor(private httpClient: HttpClient) { }

  salvar(usuario: Usuario): Observable<any>{
    return this.httpClient.post<any>(this.API_URL, usuario);
  }

  login(username: string, password: string): Observable<any>{

    //Para a app se autenticar no servidor, sera criptografado.
    const clientId = environment.CLIENT_ID;
    const clientSecret = environment.CLIENT_SECRET;

    const headers = {
      'Authorization': "Basic " + btoa(`${clientId}:${clientSecret}`),
      'Content-Type': "application/x-www-form-urlencoded"
    };
   
    const params = new HttpParams()
                          .set("username", username)
                          .set("password", password)
                          .set("grant_type", "password");

    return this.httpClient.post<any>(this.TOKEN_URL, params.toString(), {headers});
    
  }
}
