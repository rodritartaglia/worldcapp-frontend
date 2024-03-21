import { HttpClient } from '@angular/common/http'
import { UsuarioFormJSON, UsuarioJSON } from 'src/app/domain-objects/usuario'
import { Injectable } from '@angular/core'
import { LoginService } from './login.service'
import { REST_SERVER_URL } from '../domain-objects/tools'
import { lastValueFrom } from 'rxjs'

const ENDPOINT_URL = `/usuario/id/`

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private loginService: LoginService, private http: HttpClient) { }

  userID = this.loginService.currentUserID()

  async getUser() {
    const UsuarioJSON$ = this.http.get<UsuarioJSON>(REST_SERVER_URL + ENDPOINT_URL + `${this.userID}`)
    const UsuarioJSON = await lastValueFrom(UsuarioJSON$)
    console.log(UsuarioJSON)
    return UsuarioJSON
  }

  async getUserForm() {
    const UsuarioFormJSON$ = this.http.get<UsuarioFormJSON>(REST_SERVER_URL + ENDPOINT_URL + `form/${this.userID}`)
    const UsuarioFormJSON = await lastValueFrom(UsuarioFormJSON$)
    console.log(UsuarioFormJSON)
    return UsuarioFormJSON
  }

  // async getUserById(userCardID:number){
  //   const UsuarioJSON$ = this.http.get<UsuarioJSON>(REST_SERVER_URL + ENDPOINT_URL + `${userCardID}/basic`)
  //   const UsuarioJSON = await lastValueFrom(UsuarioJSON$)
  //   return UsuarioJSON 
  // }

  async actualizarUsuario(usuarioFormJson: UsuarioFormJSON) {
    const idCuenta = this.loginService.currentUserID()
    console.log(usuarioFormJson)
    return await this.http.patch<UsuarioFormJSON>(REST_SERVER_URL + ENDPOINT_URL + `${idCuenta}`, usuarioFormJson).subscribe()
  }

}
