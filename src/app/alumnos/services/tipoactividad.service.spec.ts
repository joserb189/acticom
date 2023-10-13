import { TestBed } from '@angular/core/testing';

import { TipoactividadService } from './tipoactividad.service';

describe('TipoactividadService', () => {
  let service: TipoactividadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoactividadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
