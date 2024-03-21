import { ComponentFixture, TestBed } from '@angular/core/testing'

import { FiltroBusquedaFiguritasComponent } from './filtro-busqueda-figuritas.component'
import { FormsModule } from '@angular/forms'

describe('FiltroBusquedaFiguritasComponent', () => {
  let component: FiltroBusquedaFiguritasComponent
  let fixture: ComponentFixture<FiltroBusquedaFiguritasComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiltroBusquedaFiguritasComponent],
      imports: [FormsModule]
    })
    fixture = TestBed.createComponent(FiltroBusquedaFiguritasComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
