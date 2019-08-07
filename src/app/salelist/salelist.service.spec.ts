import { TestBed } from '@angular/core/testing';

import { SalelistService } from './salelist.service';

describe('SalelistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SalelistService = TestBed.get(SalelistService);
    expect(service).toBeTruthy();
  });
});
