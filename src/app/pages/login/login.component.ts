import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { LoginService } from 'src/app/services/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  invalidUsername = false
  invalidPassword = false
  invalidLogin = false
  title = "login"

  errores: string[] = []

  user: string = "rodri"
  password: string = "1234"

  constructor(private loginService: LoginService, private router: Router) {
    const sesionIniciada = localStorage.getItem('login')
    if (sesionIniciada) {
      this.router.navigate(['/main/busquedaFiguritas'])
    }
  }

  async iniciarSesion() {

    if (!this.user || !this.password) {
      if (!this.user) {
        this.errores.push("Debe ingresar un usuario")
      }
      if (!this.password) {
        this.errores.push("Debe ingresar una contraseña")
      }
      setTimeout(() => this.errores = [], 5000)
      return
    }
    this.loginService.verificarUsuario(this.user, this.password)
      .then(() => { this.redirectToHome() })
      .catch((error: Error) => {
        console.error(error)
        // this.errores.push(error.message)
        // this.errores.push("El usuario ingresado no existe o la contraseña es incorrecta")
        setTimeout(() => this.errores = [], 5000)
      }
      )

  }


  campoVacio(campo: string) {
    return campo == '' || campo == null
  }

  isSpaceEmpty() {
    return this.user == "" || this.user == null || this.password == "" || this.password == null
  }

  isUserNameInvalid() {
    if (this.user == "" || this.user == null) {
      this.invalidUsername = true
      setTimeout(() => this.invalidUsername = false, 5000)
    }
  }

  isPasswordInvalid() {
    if (this.user == "" || this.user == null) {
      this.invalidPassword = true
      setTimeout(() => this.invalidPassword = false, 5000)
    }
  }

  LoginInvalid() {
    this.invalidLogin = true
    setTimeout(() => this.invalidLogin = false, 5000)
  }

  redirectToHome() {
    this.router.navigate(['/main/busquedaFiguritas'])
  }

}