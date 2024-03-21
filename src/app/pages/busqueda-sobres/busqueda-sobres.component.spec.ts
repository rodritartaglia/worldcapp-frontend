import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule } from '@angular/forms'
import { RouterTestingModule } from '@angular/router/testing'
import { FiltroBusquedaSobresComponent } from 'src/app/page-components/filtro-busqueda-sobres/filtro-busqueda-sobres.component'
import { HeaderComponent } from 'src/app/page-components/header/header.component'
import { SearchBarComponent } from 'src/app/page-components/search-bar/search-bar.component'
import { PuntoDeVentaComponent } from '../punto-de-venta/punto-de-venta.component'
import { BusquedaSobresComponent } from './busqueda-sobres.component'


describe('BusquedaSobresComponent', () => {
  let component: BusquedaSobresComponent
  let fixture: ComponentFixture<BusquedaSobresComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, FormsModule],
      declarations: [
        BusquedaSobresComponent,
        HeaderComponent,
        FiltroBusquedaSobresComponent,
        PuntoDeVentaComponent,
        SearchBarComponent
      ]
    })
    fixture = TestBed.createComponent(BusquedaSobresComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
