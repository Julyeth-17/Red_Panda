import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { autenticacionGuard } from './autorizacion.guard';

describe('autenticacionGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) =>
      TestBed.runInInjectionContext(() => autenticacionGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
