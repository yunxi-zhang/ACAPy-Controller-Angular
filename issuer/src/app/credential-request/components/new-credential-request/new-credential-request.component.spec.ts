import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCredentialRequestComponent } from './new-credential-request.component';

describe('NewCredentialRequestComponent', () => {
  let component: NewCredentialRequestComponent;
  let fixture: ComponentFixture<NewCredentialRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCredentialRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCredentialRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
