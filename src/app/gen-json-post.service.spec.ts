import { TestBed, inject } from '@angular/core/testing';

import { GenJsonPostService } from './gen-json-post.service';

describe('GenJsonPostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GenJsonPostService]
    });
  });

  it('should be created', inject([GenJsonPostService], (service: GenJsonPostService) => {
    expect(service).toBeTruthy();
  }));
});
