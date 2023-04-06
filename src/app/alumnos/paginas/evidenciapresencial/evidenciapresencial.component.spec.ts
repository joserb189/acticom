import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvidenciapresencialComponent } from './evidenciapresencial.component';

describe('EvidenciapresencialComponent', () => {
  let component: EvidenciapresencialComponent;
  let fixture: ComponentFixture<EvidenciapresencialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvidenciapresencialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvidenciapresencialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
