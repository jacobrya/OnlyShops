import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { TokenExpirationInterceptorService } from './token-expiration-interceptor.service';
import { TokenAttachIntercepterService } from './token-attach-intercepter.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    { provide: HTTP_INTERCEPTORS, useClass: TokenAttachIntercepterService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenExpirationInterceptorService, multi: true }
  ]
};
