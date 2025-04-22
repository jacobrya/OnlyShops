import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private backendUrl = 'http://127.0.0.1:8000/api/profile/';

  constructor(private http: HttpClient) { 
    
  }

  getUserInfo(): Observable<User> {
    return this.http.get<User>(`${this.backendUrl}`);
  }
}
