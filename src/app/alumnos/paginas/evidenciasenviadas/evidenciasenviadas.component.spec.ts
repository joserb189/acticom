import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvidenciasenviadasComponent } from './evidenciasenviadas.component';

describe('EvidenciasenviadasComponent', () => {
  let component: EvidenciasenviadasComponent;
  let fixture: ComponentFixture<EvidenciasenviadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvidenciasenviadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvidenciasenviadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
