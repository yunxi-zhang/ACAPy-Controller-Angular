import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevokeCredentialComponent } from './revoke-credential.component';

describe('RevokeCredentialComponent', () => {
  let component: RevokeCredentialComponent;
  let fixture: ComponentFixture<RevokeCredentialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevokeCredentialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevokeCredentialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
