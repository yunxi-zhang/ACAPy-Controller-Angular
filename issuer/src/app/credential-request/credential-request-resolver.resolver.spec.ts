import { TestBed } from '@angular/core/testing';

import { CredentialRequestResolverResolver } from './credential-request-resolver.resolver';

describe('CredentialRequestResolverResolver', () => {
  let resolver: CredentialRequestResolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CredentialRequestResolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
