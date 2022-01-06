import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinitionListComponent } from './definition-list.component';

describe('DefinitionListComponent', () => {
  let component: DefinitionListComponent;
  let fixture: ComponentFixture<DefinitionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefinitionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinitionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
