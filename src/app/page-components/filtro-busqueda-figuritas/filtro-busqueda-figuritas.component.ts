import { FiltroFiguritaService } from './../../services/filtro-figurita.service'
import { Component, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-filtro-busqueda-figuritas',
  templateUrl: './filtro-busqueda-figuritas.component.html',
  styleUrls: ['./filtro-busqueda-figuritas.component.scss']
})
export class FiltroBusquedaFiguritasComponent {

  constructor(public filtroService: FiltroFiguritaService) { }

  @Output() notificarCambio = new EventEmitter()
  desde: number | null = null
  hasta: number | null = null
  onFire: boolean = false
  promesa: boolean = false

  clickOnFire(){
    this.onFire = !this.onFire
  }

  clickPromesa(){
    this.promesa = !this.promesa
  }

  clickFilter(){
    this.filtroService.update(this.onFire, this.promesa, this.desde, this.hasta)
    this.notificarCambio.emit()
  }

  clickRefresh(){
    this.filtroService.refresh()
    this.notificarCambio.emit()
  }

}
