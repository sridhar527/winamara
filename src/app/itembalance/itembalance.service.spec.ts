import { TestBed } from '@angular/core/testing';

import { ItembalanceService } from './itembalance.service';

describe('ItembalanceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItembalanceService = TestBed.get(ItembalanceService);
    expect(service).toBeTruthy();
  });
});
