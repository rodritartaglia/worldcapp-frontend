import { TestBed } from '@angular/core/testing'

import { PuntoDeVentaService } from './punto-de-venta.service'
import { HttpClientTestingModule } from '@angular/common/http/testing'

describe('PuntoDeVentaService', () => {
  let service: PuntoDeVentaService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
    service = TestBed.inject(PuntoDeVentaService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
