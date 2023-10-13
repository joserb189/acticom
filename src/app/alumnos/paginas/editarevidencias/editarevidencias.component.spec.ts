import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarevidenciasComponent } from './editarevidencias.component';

describe('EditarevidenciasComponent', () => {
  let component: EditarevidenciasComponent;
  let fixture: ComponentFixture<EditarevidenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarevidenciasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarevidenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
