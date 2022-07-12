import { TestBed } from '@angular/core/testing';

import { PlatformsResolver } from './platforms.resolver';

describe('PlatformResolver', () => {
  let resolver: PlatformsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PlatformsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
