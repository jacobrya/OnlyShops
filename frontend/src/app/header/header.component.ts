import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  username: string = "Unknown User";
  title: string = 'To Do List';
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService, private userService: UserService) {

  }

  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe(state => {
      this.isLoggedIn = state;
    });
  
    this.userService.user$.subscribe(user => {
      this.username = user ? user.username : "";
    });
  }
  

  logOut() {
    this.authService.logout();
    this.userService.clearUser();
  }
}
