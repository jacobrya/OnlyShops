import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface User {
  userId: number;
  username: string;
  email?: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<User | null>(this.getUserFromStorage());
  user$ = this.userSubject.asObservable();

  setUser(user: User): void {
    this.userSubject.next(user);
    localStorage.setItem('user', JSON.stringify(user)); 
  }

  getUserFromStorage(): User | null {
    const userData = localStorage.getItem('user');
    return userData ? JSON.parse(userData) : null;
  }

  clearUser(): void {
    this.userSubject.next(null);
    localStorage.removeItem('user');
  }
}
