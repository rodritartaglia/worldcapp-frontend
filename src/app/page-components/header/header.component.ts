import { Component } from '@angular/core'
import { LoginService } from 'src/app/services/login.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isOpen: boolean = false

  constructor(private loginService: LoginService) { }

  cerrarSesion() {
    this.loginService.desloguearUsuario()
  }

  toggleNav() {
    this.isOpen = !this.isOpen
  }

}
