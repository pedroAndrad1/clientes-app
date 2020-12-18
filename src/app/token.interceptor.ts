import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

//Intercepta todas as requisicoes HTTP para checar se tem o token e, se tiver, add no header 

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //pegando o token do localStorage
    const tokenString = localStorage.getItem("access_token");

    //Verificando se tem token, se tiver, add no header.
    if(tokenString){
      const token = JSON.parse(tokenString);
      const jwt = token.access_token;

      //Adicionado o token no header, bem verboso.
      request = request.clone({
        setHeaders:{
          Authorization: "Bearer " + jwt
        }
      })
    }
    
    //Passa a request para frente
    return next.handle(request);
  }
}
