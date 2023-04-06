import { TestBed } from '@angular/core/testing';

import { JefedepartamentoService } from './jefedepartamento.service';

describe('JefedepartamentoService', () => {
  let service: JefedepartamentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JefedepartamentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
