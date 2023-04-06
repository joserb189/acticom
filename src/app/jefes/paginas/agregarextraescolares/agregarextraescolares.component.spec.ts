import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarextraescolaresComponent } from './agregarextraescolares.component';

describe('AgregarextraescolaresComponent', () => {
  let component: AgregarextraescolaresComponent;
  let fixture: ComponentFixture<AgregarextraescolaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarextraescolaresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarextraescolaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
