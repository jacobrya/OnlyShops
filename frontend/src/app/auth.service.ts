import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  private loggedIn = new BehaviorSubject<boolean>(this.isAuthentificated());
  isLoggedIn$ = this.loggedIn.asObservable();

  logout () {
    localStorage.clear()
    this.loggedIn.next(false);
    this.router.navigate(["log-in"])
    console.log("logged-out")
  }

  private isAuthentificated () {
    return !!localStorage.getItem("token")
  }
}
