import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PuntoDeVentaComponent } from './punto-de-venta.component'
import { PuntoDeVenta } from 'src/app/domain-objects/punto-de-venta'

describe('PuntoDeVentaComponent', () => {
  let component: PuntoDeVentaComponent
  let fixture: ComponentFixture<PuntoDeVentaComponent>

  beforeEach(() => {

    const puntoDeVenta = new PuntoDeVenta()

    TestBed.configureTestingModule({
      declarations: [PuntoDeVentaComponent]
    })
    fixture = TestBed.createComponent(PuntoDeVentaComponent)
    component = fixture.componentInstance

    component.puntoDeVenta = puntoDeVenta

    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
