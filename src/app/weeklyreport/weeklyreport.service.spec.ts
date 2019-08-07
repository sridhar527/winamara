import { TestBed } from '@angular/core/testing';

import { WeeklyreportService } from './weeklyreport.service';

describe('WeeklyreportService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeeklyreportService = TestBed.get(WeeklyreportService);
    expect(service).toBeTruthy();
  });
});
