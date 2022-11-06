import { TestBed } from '@angular/core/testing';

import { PluginutillService } from './pluginutill.service';

describe('PluginutillService', () => {
  let service: PluginutillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PluginutillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
