import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemaTaaComponent } from './schema-taa.component';

describe('SchemaTaaComponent', () => {
  let component: SchemaTaaComponent;
  let fixture: ComponentFixture<SchemaTaaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchemaTaaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemaTaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
