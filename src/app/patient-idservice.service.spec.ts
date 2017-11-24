import { TestBed, inject } from '@angular/core/testing';

import { PatientIdserviceService } from './patient-idservice.service';

describe('PatientIdserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PatientIdserviceService]
    });
  });

  it('should be created', inject([PatientIdserviceService], (service: PatientIdserviceService) => {
    expect(service).toBeTruthy();
  }));
});
