import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

//Guarda as toras da app, so libera o acesso caso o user esteja autenticado

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(
    private service: AuthService,
    private router: Router
    ){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
   
      const authenticated = this.service.isAutheticated();

      if(authenticated){
        return true;
      }

      //Se nao estiver autenticado, deve ir para login e ter o acesso a rota negado
      this.router.navigate(['/login']);
      return false;
  }
  
}
