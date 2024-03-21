import { TestBed } from '@angular/core/testing'

import { FiltroFiguritaService } from './filtro-figurita.service'

describe('FiltroFiguritaService', () => {
  let service: FiltroFiguritaService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(FiltroFiguritaService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
