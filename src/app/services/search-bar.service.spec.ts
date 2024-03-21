import { TestBed } from '@angular/core/testing'
import { SearchBarService } from './search-bar.service'
import { HttpClientModule } from '@angular/common/http'

describe('SearchBarService', () => {
  let service: SearchBarService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    })
    service = TestBed.inject(SearchBarService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
