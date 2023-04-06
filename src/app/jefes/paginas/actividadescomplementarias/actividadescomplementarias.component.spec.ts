import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadescomplementariasComponent } from './actividadescomplementarias.component';

describe('ActividadescomplementariasComponent', () => {
  let component: ActividadescomplementariasComponent;
  let fixture: ComponentFixture<ActividadescomplementariasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActividadescomplementariasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActividadescomplementariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
