import { TestBed } from '@angular/core/testing';

import { MonumentsService } from './monuments.service';

describe('MonumentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MonumentsService = TestBed.get(MonumentsService);
    expect(service).toBeTruthy();
  });
});
