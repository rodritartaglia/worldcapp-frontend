import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services/login.service'
import { FiltroFiguritaService } from './filtro-figurita.service'
import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { FiguritaDTO } from '../domain-objects/figuritaDTO'
import { REST_SERVER_URL } from '../domain-objects/tools'
import { lastValueFrom } from 'rxjs'

const ENDPOINT_URL = `/figurita/id/`

@Injectable({
  providedIn: 'root'
})
export class FiguritaService {
  
  constructor(private http: HttpClient, private filtro: FiltroFiguritaService, private loginService: LoginService, private toastr: ToastrService) { }

  userID = this.loginService.currentUserID()

  // Deprecated (?)
  async getFiguritaById(id: number) {
    const figurita$ = this.http.get<FiguritaDTO>(REST_SERVER_URL + `/figurita/${id}`)
    const figurita = await lastValueFrom(figurita$)
    return figurita
  }

  async getFiguritaInfo(idFigurita: number, idUser: number) {
    const figurita$ = this.http.get<FiguritaDTO>(REST_SERVER_URL + `/figurita/${idUser}/${idFigurita}`)
    const figurita = await lastValueFrom(figurita$)
    return figurita
  }

  getAllFiguritasDTO() {
    const params = this.filtro.getParams()
    return this.http.get<FiguritaDTO[]>(REST_SERVER_URL + `/figurita/busquedaFiguritas/${this.loginService.currentUserID()}`, { params })
  }

  async getFiguritasUser(type: string){
    const figuritasDTO$ = this.http.get<FiguritaDTO[]>(REST_SERVER_URL + ENDPOINT_URL + `${this.userID}/` + type)
    const figuritasDTO = await lastValueFrom(figuritasDTO$)
    return figuritasDTO
  }

  async deleteFigurita(id: number, type: string) {
    return await this.http.delete<FiguritaDTO>(REST_SERVER_URL+ ENDPOINT_URL +`${this.userID}/`+ type +`/${id}`)
  }

  async agregarFigurita(id: number, type: string) {
    return await this.http.post<FiguritaDTO>(REST_SERVER_URL+ ENDPOINT_URL +`${this.userID}/`+ type, id)
  }

  async solicitarFigurita(idDuenio:number, idFigurita: number){
    const params = new HttpParams()
    //  .set('idDuenioFigurita', idDuenio)
    //  .set('idFigurita', idFigurita)
      console.log(REST_SERVER_URL +`/figurita/intercambiarFigurita/${this.userID}`)
      return await this.http.patch<FiguritaDTO>(REST_SERVER_URL +`/figurita/intercambiarFigurita/${this.userID}/${idDuenio}/${idFigurita}`, { params })
  }

}
