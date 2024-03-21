import { ComponentFixture, TestBed } from '@angular/core/testing'

import { InfoUsuarioComponent } from './info-usuario.component'
import { HeaderComponent } from 'src/app/page-components/header/header.component'
import { FooterComponent } from 'src/app/page-components/footer/footer.component'
import { RouterTestingModule } from '@angular/router/testing'
import { FormsModule } from '@angular/forms'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { UsuarioService } from 'src/app/services/usuario.service'
import { Usuario } from 'src/app/domain-objects/usuario'


describe('InfoUsuarioComponent', () => {
  let component: InfoUsuarioComponent
  let fixture: ComponentFixture<InfoUsuarioComponent>

  //let usuario = new Usuario('Juan Perez', 54, 'Cucha Cucha')

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule, HttpClientTestingModule],
      declarations: [
        InfoUsuarioComponent,
        HeaderComponent,
        FooterComponent,
      ],
      providers: [UsuarioService]
    })
    fixture = TestBed.createComponent(InfoUsuarioComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
