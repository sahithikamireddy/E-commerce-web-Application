import { TestBed } from '@angular/core/testing';

import { StrainService } from './strain.service';

describe('StrainService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StrainService = TestBed.get(StrainService);
    expect(service).toBeTruthy();
  });
});
