import { TestBed } from '@angular/core/testing';

import { TokenAttachIntercepterService } from './token-attach-intercepter.service';

describe('TokenAttachIntercepterService', () => {
  let service: TokenAttachIntercepterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenAttachIntercepterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
