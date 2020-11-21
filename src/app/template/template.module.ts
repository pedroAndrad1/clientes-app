import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { TituloComponent } from './titulo/titulo.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SidenavComponent,
    FooterComponent,
    TituloComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    SidenavComponent,
    FooterComponent,
    TituloComponent
  ]
})
export class TemplateModule { }
