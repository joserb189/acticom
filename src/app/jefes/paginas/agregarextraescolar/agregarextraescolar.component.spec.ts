import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarextraescolarComponent } from './agregarextraescolar.component';

describe('AgregarextraescolarComponent', () => {
  let component: AgregarextraescolarComponent;
  let fixture: ComponentFixture<AgregarextraescolarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarextraescolarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarextraescolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
