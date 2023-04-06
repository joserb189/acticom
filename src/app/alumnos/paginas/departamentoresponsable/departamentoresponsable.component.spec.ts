import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentoresponsableComponent } from './departamentoresponsable.component';

describe('DepartamentoresponsableComponent', () => {
  let component: DepartamentoresponsableComponent;
  let fixture: ComponentFixture<DepartamentoresponsableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartamentoresponsableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartamentoresponsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
