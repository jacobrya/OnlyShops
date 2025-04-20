import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenExpirationInterceptorService implements HttpInterceptor {
  constructor(private router: Router) {
    
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError(
        (error) => {
          if (error.status === 401 || error.status === 403) {
            console.warn("Unauthorized request, redirecting to /log-in");
            localStorage.clear();
            this.router.navigate(["/log-in"])
          }

          return throwError(() => error)
        }
      )
    )
  }
}
