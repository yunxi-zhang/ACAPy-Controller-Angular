import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CredentialRequestCardComponent } from './credential-request-card.component';

describe('CredentialRequestCardComponent', () => {
  let component: CredentialRequestCardComponent;
  let fixture: ComponentFixture<CredentialRequestCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CredentialRequestCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CredentialRequestCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
