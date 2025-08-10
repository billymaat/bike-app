import { TestBed } from '@angular/core/testing';

import { CycleEventsFilterService } from './cycle-events-filter.service';

describe('CycleEventsFilterService', () => {
  let service: CycleEventsFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CycleEventsFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
