import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultDonneesComponent } from './consult-donnees.component';

describe('ConsultDonneesComponent', () => {
  let component: ConsultDonneesComponent;
  let fixture: ComponentFixture<ConsultDonneesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultDonneesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultDonneesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
