import { TestBed } from '@angular/core/testing'

import { FiguritaService } from './figurita.service'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ToastrModule } from 'ngx-toastr'

describe('FiguritaService', () => {
  let service: FiguritaService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ToastrModule.forRoot()],
      providers: [FiguritaService]
    })
    service = TestBed.inject(FiguritaService)

  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
