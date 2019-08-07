import { TestBed } from '@angular/core/testing';

import { QuartzService } from './quartz.service';

describe('QuartzService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuartzService = TestBed.get(QuartzService);
    expect(service).toBeTruthy();
  });
});
