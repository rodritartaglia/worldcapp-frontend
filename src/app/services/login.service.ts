import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Cuentas } from '../domain-objects/cuentas'
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http'
import { REST_SERVER_URL, handleHttpErrorResponse } from '../domain-objects/tools'
import { lastValueFrom } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  currentUserID() {
    return localStorage.getItem('id-user')
  }

  constructor(private cuentas: Cuentas, private router: Router, private http: HttpClient) { }

  desloguearUsuario() {
    localStorage.removeItem('login')
    localStorage.removeItem('id-user')
  }

  async verificarUsuario(user: string, password: string) {
    try {
      const params = new HttpParams().set('user',user).set('password',password)
      const userID$ = this.http.post(REST_SERVER_URL + `/usuario/login`, params)
      const userID = await lastValueFrom(userID$)
        .catch( (error: HttpErrorResponse) => { throw new Error(handleHttpErrorResponse(error)) } )
      if (userID != null) {
        localStorage.setItem('login', 'true')
        localStorage.setItem('id-user', `${userID}`)
      }
    }
    catch(e) {
      console.log(e)
    }
  }

  canActivate() {
    const estaLogeado = localStorage.getItem('login') === 'true'
    if (!estaLogeado) { this.router.navigate(['/']) }
    return estaLogeado
  }

}
