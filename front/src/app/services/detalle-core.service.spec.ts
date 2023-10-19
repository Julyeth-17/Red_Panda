import { TestBed } from '@angular/core/testing';

import { DetalleCoreService } from './detalle-core.service';

describe('DetalleCoreService', () => {
  let service: DetalleCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalleCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
