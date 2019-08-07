import { TestBed } from '@angular/core/testing';

import { WeeklypayService } from './weeklypay.service';

describe('WeeklypayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeeklypayService = TestBed.get(WeeklypayService);
    expect(service).toBeTruthy();
  });
});
