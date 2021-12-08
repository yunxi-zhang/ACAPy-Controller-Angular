import { TestBed } from '@angular/core/testing';

import { CredentialRequestResolverService } from './credential-request-resolver.service';

describe('CredentialRequestResolverResolver', () => {
  let resolver: CredentialRequestResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CredentialRequestResolverService);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
