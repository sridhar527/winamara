import { TestBed } from '@angular/core/testing';

import { SalereportService } from './salereport.service';

describe('SalereportService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SalereportService = TestBed.get(SalereportService);
    expect(service).toBeTruthy();
  });
});
