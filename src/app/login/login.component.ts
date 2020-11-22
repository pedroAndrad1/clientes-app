import { Component} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userName: string;
  password: string;
  loginError: boolean;
  cadastrando = false;

  constructor() { }

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
}
