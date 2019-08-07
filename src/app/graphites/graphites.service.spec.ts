import { TestBed } from '@angular/core/testing';

import { GraphitesService } from './graphites.service';

describe('GraphitesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GraphitesService = TestBed.get(GraphitesService);
    expect(service).toBeTruthy();
  });
});
