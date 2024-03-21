import { Component,Input } from '@angular/core'
import { PuntoDeVenta } from 'src/app/domain-objects/punto-de-venta'

@Component({
  selector: 'app-punto-de-venta',
  templateUrl: './punto-de-venta.component.html',
  styleUrls: ['./punto-de-venta.component.scss']
})
export class PuntoDeVentaComponent{

  @Input() puntoDeVenta!:PuntoDeVenta

}