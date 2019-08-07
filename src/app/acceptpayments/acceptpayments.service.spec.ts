import { TestBed } from '@angular/core/testing';

import { AcceptpaymentsService } from './acceptpayments.service';

describe('AcceptpaymentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AcceptpaymentsService = TestBed.get(AcceptpaymentsService);
    expect(service).toBeTruthy();
  });
});
