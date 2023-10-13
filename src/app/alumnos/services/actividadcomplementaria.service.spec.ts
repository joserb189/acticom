import { TestBed } from '@angular/core/testing';

import { ActividadcomplementariaService } from './actividadcomplementaria.service';

describe('ActividadcomplementariaService', () => {
  let service: ActividadcomplementariaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActividadcomplementariaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
