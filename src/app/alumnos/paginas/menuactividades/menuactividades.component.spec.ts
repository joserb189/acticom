import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuactividadesComponent } from './menuactividades.component';

describe('MenuactividadesComponent', () => {
  let component: MenuactividadesComponent;
  let fixture: ComponentFixture<MenuactividadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuactividadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuactividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
