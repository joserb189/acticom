import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarcarreraComponent } from './agregarcarrera.component';

describe('AgregarcarreraComponent', () => {
  let component: AgregarcarreraComponent;
  let fixture: ComponentFixture<AgregarcarreraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarcarreraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarcarreraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
