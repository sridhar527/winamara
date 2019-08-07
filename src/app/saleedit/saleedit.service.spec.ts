import { TestBed } from '@angular/core/testing';

import { SaleeditService } from './saleedit.service';

describe('SaleeditService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SaleeditService = TestBed.get(SaleeditService);
    expect(service).toBeTruthy();
  });
});
