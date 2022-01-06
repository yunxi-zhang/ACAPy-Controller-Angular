import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProofComponent } from './new-proof.component';

describe('NewProofComponent', () => {
  let component: NewProofComponent;
  let fixture: ComponentFixture<NewProofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewProofComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
