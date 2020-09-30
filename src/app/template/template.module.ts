import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    SidenavComponent
  ]
})
export class TemplateModule { }
