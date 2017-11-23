import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaisieDataComponent } from './saisie-data.component';

describe('SaisieDataComponent', () => {
  let component: SaisieDataComponent;
  let fixture: ComponentFixture<SaisieDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaisieDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaisieDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
