import { TestBed } from '@angular/core/testing';

import { PaymentvocherlistService } from './paymentvocherlist.service';

describe('PaymentvocherlistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaymentvocherlistService = TestBed.get(PaymentvocherlistService);
    expect(service).toBeTruthy();
  });
});
