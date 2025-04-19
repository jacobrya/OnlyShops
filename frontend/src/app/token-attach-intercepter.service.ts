import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenAttachIntercepterService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem("token");

    const authReq = token 
      ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } }) 
      : req;

    return next.handle(authReq);
  }
}