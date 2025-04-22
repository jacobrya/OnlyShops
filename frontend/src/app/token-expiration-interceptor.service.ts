import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, switchMap, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { Refresh } from './auth';

@Injectable({
  providedIn: 'root'
})
export class TokenExpirationInterceptorService implements HttpInterceptor {
  constructor(private router: Router, private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error) => {
        if (error.status === 401) {
          console.warn("Unauthorized request, trying to refresh");
          const refresh_token: string | null = localStorage.getItem('refresh-token');
          // console.log("Refresh token", refresh_token);

          if (!refresh_token) {
            this.auth.logout();
            return throwError(() => error);
          }

          return this.auth.refresh(refresh_token).pipe(
            switchMap((access: Refresh) => {
              localStorage.setItem('access-token', access.access);

              const newReq = req.clone({
                setHeaders: { Authorization: `Bearer ${access.access}` }
              });

              return next.handle(newReq);
            }),
            catchError(err => {
              this.auth.logout();
              return throwError(() => err);
            })
          );
        }

        return throwError(() => error);
      })
    );
  }
}
