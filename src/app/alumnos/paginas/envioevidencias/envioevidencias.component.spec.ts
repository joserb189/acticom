import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvioevidenciasComponent } from './envioevidencias.component';

describe('EnvioevidenciasComponent', () => {
  let component: EnvioevidenciasComponent;
  let fixture: ComponentFixture<EnvioevidenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvioevidenciasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnvioevidenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
