import { TestBed } from '@angular/core/testing';

import { ProofResolverResolver } from './proof-resolver.resolver';

describe('ProofResolverResolver', () => {
  let resolver: ProofResolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ProofResolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
