import { TestBed, inject } from '@angular/core/testing';

import { CheckinsService } from './checkins.service';

describe('CheckinsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckinsService]
    });
  });

  it('should be created', inject([CheckinsService], (service: CheckinsService) => {
    expect(service).toBeTruthy();
  }));
});
