import { ComponentFixture, TestBed } from '@angular/core/testing'

import { InfoUsuarioFiguritasRepetidasComponent } from './info-usuario-figuritas-repetidas.component'
import { RouterTestingModule } from '@angular/router/testing'
import { FiguritaComponent } from '../figurita/figurita.component'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ToastrModule } from 'ngx-toastr'
import { InfoUsuarioFiguritasComponent } from '../info-usuario-figuritas/info-usuario-figuritas.component'

describe('InfoUsuarioFiguritasRepetidasComponent', () => {
  let component: InfoUsuarioFiguritasRepetidasComponent
  let fixture: ComponentFixture<InfoUsuarioFiguritasRepetidasComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiguritaComponent, InfoUsuarioFiguritasRepetidasComponent, InfoUsuarioFiguritasComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, ToastrModule.forRoot()]
    })
    fixture = TestBed.createComponent(InfoUsuarioFiguritasRepetidasComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
