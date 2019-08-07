import { TestBed } from '@angular/core/testing';

import { InvoicelistService } from './invoicelist.service';

describe('InvoicelistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InvoicelistService = TestBed.get(InvoicelistService);
    expect(service).toBeTruthy();
  });
});
