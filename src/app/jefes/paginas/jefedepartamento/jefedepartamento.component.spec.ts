import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JefedepartamentoComponent } from './jefedepartamento.component';

describe('JefedepartamentoComponent', () => {
  let component: JefedepartamentoComponent;
  let fixture: ComponentFixture<JefedepartamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JefedepartamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JefedepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
