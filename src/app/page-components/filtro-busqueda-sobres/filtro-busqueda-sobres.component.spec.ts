import { ComponentFixture, TestBed } from '@angular/core/testing'

import { FiltroBusquedaSobresComponent } from './filtro-busqueda-sobres.component'
import { BusquedaSobresComponent } from 'src/app/pages/busqueda-sobres/busqueda-sobres.component'
import { HttpClientTestingModule } from '@angular/common/http/testing'

describe('FiltroBusquedaSobresComponent', () => {
  let component: FiltroBusquedaSobresComponent
  let fixture: ComponentFixture<FiltroBusquedaSobresComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiltroBusquedaSobresComponent, BusquedaSobresComponent],
      providers: [BusquedaSobresComponent],
      imports: [HttpClientTestingModule]
    })
    fixture = TestBed.createComponent(FiltroBusquedaSobresComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
