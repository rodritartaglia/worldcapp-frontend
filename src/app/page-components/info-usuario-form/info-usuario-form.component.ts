import { Component, OnInit } from '@angular/core'
import { UsuarioService } from 'src/app/services/usuario.service'
import { UsuarioFormJSON } from 'src/app/domain-objects/usuario'

@Component({
  selector: 'app-info-usuario-form',
  templateUrl: './info-usuario-form.component.html',
  styleUrls: ['./info-usuario-form.component.scss'],
})
export class InfoUsuarioFormComponent implements OnInit {
  constructor(private usuarioService: UsuarioService) { }

  usuario!: UsuarioFormJSON

  usuarioNombre!: string
  usuarioApellido!: string
  usuarioCorreoElectronico!: string
  usuarioCalle!: string
  usuarioAltura!: number
  usuarioLocalidad!: string
  usuarioProvincia!: string
  usuarioFechaDeNacimiento!: string | Date
  fechaFormateada!: Date

  ngOnInit() {
    this.getUser()
  }


  async getUser() {
    try {
      const usuarioFormJSON = await this.usuarioService.getUserForm()
      this.usuarioNombre = usuarioFormJSON.nombre
      this.usuarioApellido = usuarioFormJSON.apellido
      this.usuarioCorreoElectronico = usuarioFormJSON.correoElectronico
      this.usuarioCalle = usuarioFormJSON.calle
      this.usuarioAltura = usuarioFormJSON.altura
      this.usuarioLocalidad = usuarioFormJSON.localidad
      this.usuarioProvincia = usuarioFormJSON.provincia
      this.usuarioFechaDeNacimiento = usuarioFormJSON.fechaDeNacimiento
      this.fechaFormateada = new Date(this.usuarioFechaDeNacimiento)
    } catch (e) {
      console.error(e)
    }
  }


  guardarDatos() {
    this.fechaFormateada = new Date(this.usuarioFechaDeNacimiento)
    const fechaString = this.fechaFormateada.toISOString().slice(0, 10)

    const usuario = new UsuarioFormJSON(
      this.usuarioNombre,
      this.usuarioApellido,
      this.usuarioCorreoElectronico,
      this.usuarioCalle,
      this.usuarioAltura,
      this.usuarioLocalidad,
      this.usuarioProvincia,
      fechaString
    )

    this.usuarioService.actualizarUsuario(usuario)
    window.location.reload()
  }
}
