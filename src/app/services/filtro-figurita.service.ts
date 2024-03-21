import { HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class FiltroFiguritaService {

  onFire: boolean = false
  promesa: boolean = false
  desde: number | null = null
  hasta: number | null = null
  busqueda: string | null = null

  changeBusqueda(busqueda: string | null){
    this.busqueda = busqueda
  }
  
  update(onFire: boolean, promesa:boolean, desde: number | null, hasta: number | null){  
    this.onFire = onFire
    this.promesa = promesa
    this.desde = desde
    this.hasta = hasta
  }

  refresh(){
    this.onFire = false
    this.promesa = false
    this.desde = null
    this.hasta = null
    this.busqueda = null
  }

  getParams(): HttpParams {
    const params = new HttpParams()
      .set('min', this.desde != null ? this.desde.toString() : '')
      .set('max', this.hasta != null ? this.hasta.toString() : '')
      .set('onFire', this.onFire)
      .set('promesa', this.promesa)
      .set('busqueda', this.busqueda != null ? this.busqueda.toString() : '')
    return params
  }

}
