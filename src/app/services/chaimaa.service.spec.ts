import { TestBed } from '@angular/core/testing';

import { ChaimaaService } from './chaimaa.service';

describe('ChaimaaService', () => {
  let service: ChaimaaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChaimaaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
