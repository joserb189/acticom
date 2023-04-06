import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoactividadComponent } from './tipoactividad.component';

describe('TipoactividadComponent', () => {
  let component: TipoactividadComponent;
  let fixture: ComponentFixture<TipoactividadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoactividadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoactividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
