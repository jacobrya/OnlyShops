import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenAttachIntercepterService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.includes('/login') || req.url.includes('/register')) {
      return next.handle(req);
    }    
    
    const token = localStorage.getItem("access-token");
    console.log("TokenAttachIntercepterService: ", token);

    const authReq = token 
      ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } }) 
      : req;

    return next.handle(authReq);
  }
}