import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientIdtComponent } from './patient-idt.component';

describe('PatientIdtComponent', () => {
  let component: PatientIdtComponent;
  let fixture: ComponentFixture<PatientIdtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientIdtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientIdtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
