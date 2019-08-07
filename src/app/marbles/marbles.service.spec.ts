import { TestBed } from '@angular/core/testing';

import { MarblesService } from './marbles.service';

describe('MarblesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarblesService = TestBed.get(MarblesService);
    expect(service).toBeTruthy();
  });
});
