import { TestBed, inject } from '@angular/core/testing';

import { GoTestService } from './go-test.service';

describe('GoTestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoTestService]
    });
  });

  it('should be created', inject([GoTestService], (service: GoTestService) => {
    expect(service).toBeTruthy();
  }));
});
