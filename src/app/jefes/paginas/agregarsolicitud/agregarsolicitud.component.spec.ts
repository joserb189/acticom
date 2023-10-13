import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarsolicitudComponent } from './agregarsolicitud.component';

describe('AgregarsolicitudComponent', () => {
  let component: AgregarsolicitudComponent;
  let fixture: ComponentFixture<AgregarsolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarsolicitudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarsolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
