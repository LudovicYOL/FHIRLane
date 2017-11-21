import { TestBed, inject } from '@angular/core/testing';

import { PersoDataService } from './perso-data.service';

describe('PersoDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersoDataService]
    });
  });

  it('should be created', inject([PersoDataService], (service: PersoDataService) => {
    expect(service).toBeTruthy();
  }));
});
