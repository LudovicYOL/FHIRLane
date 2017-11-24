import { TestBed, inject } from '@angular/core/testing';

import { RdvDataService } from './rdv-data.service';

describe('RdvDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RdvDataService]
    });
  });

  it('should be created', inject([RdvDataService], (service: RdvDataService) => {
    expect(service).toBeTruthy();
  }));
});
