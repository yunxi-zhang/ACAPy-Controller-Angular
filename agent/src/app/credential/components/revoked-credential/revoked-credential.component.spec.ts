import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevokedCredentialComponent } from './revoked-credential.component';

describe('RevokedCredentialComponent', () => {
  let component: RevokedCredentialComponent;
  let fixture: ComponentFixture<RevokedCredentialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevokedCredentialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevokedCredentialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
