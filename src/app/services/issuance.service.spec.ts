import { TestBed } from '@angular/core/testing';

import { IssuanceService } from './issuance.service';

describe('IssuanceService', () => {
  let service: IssuanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IssuanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
