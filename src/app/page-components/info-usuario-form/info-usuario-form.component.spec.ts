import { ComponentFixture, TestBed } from '@angular/core/testing'

import { InfoUsuarioFormComponent } from './info-usuario-form.component'
import { InfoUsuarioComponent } from 'src/app/pages/info-usuario/info-usuario.component'
import { RouterTestingModule } from '@angular/router/testing'
import { FormsModule } from '@angular/forms'
import { HttpClientTestingModule } from '@angular/common/http/testing'

describe('InfoUsuarioFormComponent', () => {
  let component: InfoUsuarioFormComponent
  let fixture: ComponentFixture<InfoUsuarioFormComponent>



  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoUsuarioFormComponent, InfoUsuarioComponent],
      imports: [RouterTestingModule, FormsModule, HttpClientTestingModule],
      providers: [InfoUsuarioComponent]
    })
    fixture = TestBed.createComponent(InfoUsuarioFormComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

