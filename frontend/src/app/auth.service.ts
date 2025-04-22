import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, Observable, tap } from 'rxjs';
import { Login, Register, Refresh } from './auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private http: HttpClient) { }

  private backendUrl: string = 'http://127.0.0.1:8000/api/auth'
  private loggedIn = new BehaviorSubject<boolean>(this.isAuthenticated());
  public isLoggedIn$ = this.loggedIn.asObservable();
  
  isAuthenticated(): boolean {
    return !!localStorage.getItem('access-token') && !!localStorage.getItem('refresh-token');
  }
  
  updateLoginStatus(isLoggedIn: boolean) {
    this.loggedIn.next(isLoggedIn);
  }

  login (username: string, password: string): Observable<Login> {
    return this.http.post<Login>(`${this.backendUrl}/login/`, 
      {
        username: username,
        password: password
      }
    ).pipe(
      tap((res: Login) => {
        localStorage.setItem("access-token", res.access);
        localStorage.setItem("refresh-token", res.refresh);
        this.updateLoginStatus(true);
      })
    )
  }

  register(username: string, email: string, password: string): Observable<Register> {
    return this.http.post<Register>(`${this.backendUrl}/register/`, 
      {
        username: username,
        email: email,
        password: password
      }
    )
  }

  refresh (refresh: string): Observable<Refresh> {
    return this.http.post<Refresh>(`${this.backendUrl}/refresh/`, 
      {
        refresh: refresh
      }
    )
  }

  logout () {
    localStorage.clear()
    this.updateLoginStatus(false);
    this.router.navigate(["log-in"])
    console.log("logged-out")
  }

  syncLoginState() {
    this.loggedIn.next(this.isAuthenticated());
  }
}
