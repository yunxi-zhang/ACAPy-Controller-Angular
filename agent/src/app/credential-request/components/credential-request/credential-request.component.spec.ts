import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CredentialRequestComponent } from './credential-request.component';

describe('CredentialRequestComponent', () => {
  let component: CredentialRequestComponent;
  let fixture: ComponentFixture<CredentialRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CredentialRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CredentialRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
