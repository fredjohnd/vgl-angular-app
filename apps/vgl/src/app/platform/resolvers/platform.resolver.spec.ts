import { TestBed } from '@angular/core/testing';

import { PlatformResolver } from './platform.resolver';

describe('PlatformResolver', () => {
  let resolver: PlatformResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PlatformResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
