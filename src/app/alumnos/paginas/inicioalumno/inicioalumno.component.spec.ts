import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioalumnoComponent } from './inicioalumno.component';

describe('InicioalumnoComponent', () => {
  let component: InicioalumnoComponent;
  let fixture: ComponentFixture<InicioalumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioalumnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioalumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
