import { TestBed } from '@angular/core/testing';

import { ShopsService } from './shops.service';

describe('ShopsService', () => {
  let service: ShopsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
