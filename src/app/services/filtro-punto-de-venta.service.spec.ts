import { TestBed } from '@angular/core/testing';

import { FiltroPuntoDeVentaService } from './filtro-punto-de-venta.service';

describe('FiltroPuntoDeVentaService', () => {
  let service: FiltroPuntoDeVentaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiltroPuntoDeVentaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
