import { TestBed } from '@angular/core/testing';

import { TokenExpirationInterceptorService } from './token-expiration-interceptor.service';

describe('TokenExpirationInterceptorService', () => {
  let service: TokenExpirationInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenExpirationInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
