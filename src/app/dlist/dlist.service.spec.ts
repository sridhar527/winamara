import { TestBed } from '@angular/core/testing';

import { DlistService } from './dlist.service';

describe('DlistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DlistService = TestBed.get(DlistService);
    expect(service).toBeTruthy();
  });
});
