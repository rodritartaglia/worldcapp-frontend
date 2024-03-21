import { LoginService } from 'src/app/services/login.service'
import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { REST_SERVER_URL } from '../domain-objects/tools'
import { PuntoDeVenta } from '../domain-objects/punto-de-venta'
import { FiltroFiguritaService } from './filtro-figurita.service'

@Injectable({
  providedIn: 'root'
})
export class PuntoDeVentaService{

  storageUserId!:string | null

  constructor(private http: HttpClient, private LoginService: LoginService, private filterService: FiltroFiguritaService) {
     this.storageUserId = localStorage.getItem('id-user')
  }

  getPuntosDeVenta() {
    const params = new HttpParams().set('busqueda', this.filterService.busqueda != null ? this.filterService.busqueda.toString() : '')
    const puntosDeVenta$ = this.http.get<PuntoDeVenta[]>(REST_SERVER_URL + `/puntoDeVenta/${this.storageUserId}`, {params} )
    return puntosDeVenta$
  }

}
