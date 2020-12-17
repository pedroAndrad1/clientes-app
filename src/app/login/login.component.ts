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
  cadastrando = false;
  errors = [];

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
    //Para tirar as mensagens da tela de cadastro
    this.cadastroSuccess = false;
    this.errors = null;
    //Limpando o form
    this.userName = "";
    this.password = "";
  }

  cadastrar(){

    const usuario = new Usuario();
    usuario.username = this.userName;
    usuario.password = this.password;

    this.authService.salvar(usuario)
                                  .subscribe(
                                    res => {
                                      this.cadastroSuccess = true;
                                      this.errors = null;
                                    },
                                    errorRes =>{
                                      this.cadastroSuccess = false;
                                      this.errors = null;
                                      console.log(errorRes);
                                      this.errors = errorRes.error.errors;
                                    }
                                  )
    
  }
}
