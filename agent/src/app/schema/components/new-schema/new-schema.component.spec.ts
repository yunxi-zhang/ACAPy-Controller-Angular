import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSchemaComponent } from './new-schema.component';

describe('NewSchemaComponent', () => {
  let component: NewSchemaComponent;
  let fixture: ComponentFixture<NewSchemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSchemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSchemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
