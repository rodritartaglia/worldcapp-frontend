import { ComponentFixture, TestBed } from '@angular/core/testing'
import { BusquedaFiguritasComponent } from './busqueda-figuritas.component'
import { HeaderComponent } from 'src/app/page-components/header/header.component'
import { FiltroBusquedaFiguritasComponent } from 'src/app/page-components/filtro-busqueda-figuritas/filtro-busqueda-figuritas.component'
import { FiguritaComponent } from 'src/app/page-components/figurita/figurita.component'
import { RouterTestingModule } from '@angular/router/testing'
import { SearchBarComponent } from 'src/app/page-components/search-bar/search-bar.component'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { FormsModule } from '@angular/forms'
import { ToastrModule } from 'ngx-toastr'

describe('BusquedaFiguritasComponent', () => {
  let component: BusquedaFiguritasComponent
  let fixture: ComponentFixture<BusquedaFiguritasComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, FormsModule, ToastrModule.forRoot()],
      declarations: [
        BusquedaFiguritasComponent,
        HeaderComponent,
        FiltroBusquedaFiguritasComponent,
        FiguritaComponent,
        SearchBarComponent
      ]
    })
    fixture = TestBed.createComponent(BusquedaFiguritasComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
