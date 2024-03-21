import { Component, OnInit } from '@angular/core'
import { Usuario } from 'src/app/domain-objects/usuario'
import { LoginService } from 'src/app/services/login.service'
import { UsuarioService } from 'src/app/services/usuario.service'

@Component({
  selector: 'app-info-usuario',
  templateUrl: './info-usuario.component.html',
  styleUrls: ['./info-usuario.component.scss']
})
export class InfoUsuarioComponent implements OnInit{
  
  usuario!: Usuario
  
  constructor(private loginService: LoginService, private usuarioService: UsuarioService) {  }

  async ngOnInit() {
    await this.getUser()
  }
  
  async getUser(){
    try {
      const usuarioJSON = await this.usuarioService.getUser()
      this.usuario = new Usuario()
      this.usuario.fromJSON(usuarioJSON)
    } catch(e) {
      console.log(e)
    }
  }

}