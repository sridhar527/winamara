import { TestBed } from '@angular/core/testing';

import { HemaService } from './hema.service';

describe('HemaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HemaService = TestBed.get(HemaService);
    expect(service).toBeTruthy();
  });
});
