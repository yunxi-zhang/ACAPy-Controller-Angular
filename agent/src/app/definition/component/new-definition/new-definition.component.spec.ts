import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDefinitionComponent } from './new-definition.component';

describe('NewDefinitionComponent', () => {
  let component: NewDefinitionComponent;
  let fixture: ComponentFixture<NewDefinitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDefinitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDefinitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
