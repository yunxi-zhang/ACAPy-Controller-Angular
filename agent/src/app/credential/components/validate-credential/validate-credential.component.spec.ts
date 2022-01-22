import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateCredentialComponent } from './validate-credential.component';

describe('ValidateCredentialComponent', () => {
  let component: ValidateCredentialComponent;
  let fixture: ComponentFixture<ValidateCredentialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidateCredentialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateCredentialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
