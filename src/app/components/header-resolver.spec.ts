import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { headerResolver } from './header-resolver';

describe('headerResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() => headerResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
