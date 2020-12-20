import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit{

  username: String;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.username = this.authService.getUsername();
  }

  logout(): void{
    this.authService.logout();
  }


}
