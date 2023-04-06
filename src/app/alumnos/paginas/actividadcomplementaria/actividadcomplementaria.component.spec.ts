import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadcomplementariaComponent } from './actividadcomplementaria.component';

describe('ActividadcomplementariaComponent', () => {
  let component: ActividadcomplementariaComponent;
  let fixture: ComponentFixture<ActividadcomplementariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActividadcomplementariaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActividadcomplementariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
