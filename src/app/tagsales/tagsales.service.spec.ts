import { TestBed } from '@angular/core/testing';

import { TagsalesService } from './tagsales.service';

describe('TagsalesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TagsalesService = TestBed.get(TagsalesService);
    expect(service).toBeTruthy();
  });
});
