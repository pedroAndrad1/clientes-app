import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  {
    path: "", component: LayoutComponent, children: [
      //{ path: "home", component: HomeComponent, canActivate:[AuthGuard] }, 
      //Para evitar o acesso ao LayoutComponent sem seus filhos
      {path: "", redirectTo:"/clientes/lista", pathMatch: "full"},   
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
