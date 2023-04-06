import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarperiodoComponent } from './agregarperiodo.component';

describe('AgregarperiodoComponent', () => {
  let component: AgregarperiodoComponent;
  let fixture: ComponentFixture<AgregarperiodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarperiodoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarperiodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
