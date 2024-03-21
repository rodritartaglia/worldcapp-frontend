import { ComponentFixture, TestBed } from '@angular/core/testing'
import { InfoUsuarioFiguritasFaltantesComponent } from './info-usuario-figuritas-faltantes.component'
import { RouterTestingModule } from '@angular/router/testing'
import { Usuario } from 'src/app/domain-objects/usuario'
import { FiguritaComponent } from '../figurita/figurita.component'
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr'
import { InfoUsuarioFiguritasComponent } from '../info-usuario-figuritas/info-usuario-figuritas.component'

describe('InfoUsuarioFiguritasFaltantesComponent', () => {
  let component: InfoUsuarioFiguritasFaltantesComponent
  let fixture: ComponentFixture<InfoUsuarioFiguritasFaltantesComponent>

  let usuario = new Usuario('Juan Perez', 54, 'Cucha Cucha')

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoUsuarioFiguritasFaltantesComponent, FiguritaComponent, InfoUsuarioFiguritasComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, ToastrModule.forRoot()],
    })
    fixture = TestBed.createComponent(InfoUsuarioFiguritasFaltantesComponent)
    component = fixture.componentInstance


    fixture.detectChanges()

  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
