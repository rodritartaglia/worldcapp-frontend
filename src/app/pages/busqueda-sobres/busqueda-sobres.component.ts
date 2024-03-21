import { FiltroFiguritaService } from './../../services/filtro-figurita.service';
import { lastValueFrom } from 'rxjs';
import { Component, OnInit } from '@angular/core'
import { PuntoDeVenta } from 'src/app/domain-objects/punto-de-venta'
import { PuntoDeVentaService } from 'src/app/services/punto-de-venta.service'

@Component({
  selector: 'app-busqueda-sobres',
  templateUrl: './busqueda-sobres.component.html',
  styleUrls: ['./busqueda-sobres.component.scss']
})
export class BusquedaSobresComponent implements OnInit {


  puntosDeVenta !: PuntoDeVenta[]
  sortedPuntosDeVenta: PuntoDeVenta[] = this.puntosDeVenta

  constructor(private puntosDeVentaService: PuntoDeVentaService, private filtroService: FiltroFiguritaService) { }

  ngOnInit() {
    this.filtroService.refresh()
    this.getPuntosDeVenta()
  }

  async getPuntosDeVenta() {
    try {
      this.puntosDeVenta = await lastValueFrom(this.puntosDeVentaService.getPuntosDeVenta())
      this.menorDistancia()
    }
    catch (error) {
      console.error(error)
    }
  }

  menorDistancia() {
    this.sortedPuntosDeVenta = this.puntosDeVenta.sort((a, b) => a.distancia - b.distancia)
  }

  masBarato() {
    this.sortedPuntosDeVenta = this.puntosDeVenta.sort((a, b) => a.precioPorSobre - b.precioPorSobre)
  }

  masSobres() {
    this.sortedPuntosDeVenta = this.puntosDeVenta.sort((a, b) => b.stock - a.stock)
  }


}