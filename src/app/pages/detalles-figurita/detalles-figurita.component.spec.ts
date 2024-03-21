import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { DetallesFiguritaComponent } from './detalles-figurita.component'
import { HeaderComponent } from 'src/app/page-components/header/header.component'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ToastrModule } from 'ngx-toastr'
// import { ActivatedRoute } from '@angular/router'

describe('DetallesFiguritaComponent', () => {
  let component: DetallesFiguritaComponent
  let fixture: ComponentFixture<DetallesFiguritaComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, ToastrModule.forRoot()],
      declarations: [DetallesFiguritaComponent, HeaderComponent]
    })
    fixture = TestBed.createComponent(DetallesFiguritaComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
