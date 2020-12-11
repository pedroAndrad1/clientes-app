import { Component} from '@angular/core';
import { AuthService } from '../auth.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userName: string;
  password: string;
  loginError: boolean;
  cadastroSuccess = false;
  cadastroError = false;
  cadastrando = false;

  constructor(
    private authService: AuthService
  ) { }

  onSubmit(){
    console.log(this.userName, this.password);
  }

  preparaCadastro(event){
    event.preventDefault();

    this.cadastrando = true;
  }

  cancelaCadastro(){
    this.cadastrando = false;
  }

  cadastrar(){

    const usuario = new Usuario();
    usuario.username = this.userName;
    usuario.password = this.password;

    this.authService.salvar(usuario)
                                  .subscribe(
                                    res => {
                                      this.cadastroSuccess = true;
                                      this.cadastroError = false;
                                    },
                                    error =>{
                                      this.cadastroSuccess = false;
                                      this.cadastroError = true;
                                    }
                                  )
    
  }
}
