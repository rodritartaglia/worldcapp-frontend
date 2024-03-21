import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AgregarFiguritaPerfilComponent } from './agregar-figurita-perfil.component'
import { SearchBarComponent } from 'src/app/page-components/search-bar/search-bar.component'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { FiltroBusquedaFiguritasComponent } from 'src/app/page-components/filtro-busqueda-figuritas/filtro-busqueda-figuritas.component'
import { FiguritaComponent } from 'src/app/page-components/figurita/figurita.component'
import { RouterTestingModule } from '@angular/router/testing'
import { FormsModule } from '@angular/forms'
import { ToastrModule } from 'ngx-toastr'

describe('AgregarFiguritaPerfilComponent', () => {
  let component: AgregarFiguritaPerfilComponent
  let fixture: ComponentFixture<AgregarFiguritaPerfilComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule, ToastrModule.forRoot()],
      declarations: [AgregarFiguritaPerfilComponent, SearchBarComponent, FiltroBusquedaFiguritasComponent, FiguritaComponent]
    })
    fixture = TestBed.createComponent(AgregarFiguritaPerfilComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
