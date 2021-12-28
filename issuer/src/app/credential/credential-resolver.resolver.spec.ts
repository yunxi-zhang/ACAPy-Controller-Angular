import { TestBed } from '@angular/core/testing';

import { CredentialResolverService } from './credential-resolver.resolver';

describe('CredentialResolverResolver', () => {
  let resolver: CredentialResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CredentialResolverService);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
