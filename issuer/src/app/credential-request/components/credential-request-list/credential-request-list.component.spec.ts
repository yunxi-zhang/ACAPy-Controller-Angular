import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CredentialRequestListComponent } from './credential-request-list.component';

describe('CredentialRequestListComponent', () => {
  let component: CredentialRequestListComponent;
  let fixture: ComponentFixture<CredentialRequestListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CredentialRequestListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CredentialRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
