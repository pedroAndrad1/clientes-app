import {  Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{

  constructor(private renderer: Renderer2) { }

  menu(){
    //Não é boa prática referenciar o DOM assim, mas essa foi a única forma que encontrei
   document.getElementById("body").classList.toggle("sb-sidenav-toggled");
  }
  
}
