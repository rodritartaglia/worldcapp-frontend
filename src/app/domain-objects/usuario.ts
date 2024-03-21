export class UsuarioJSON {
  constructor(
    public username: string,
    public nombreCompleto: string,
    public fechaNacimiento: string,
    public edad: number,
    public ubicacion: string,
    public avatarUrl: string
  ) { }

}

export class Usuario {
  constructor(
    public nombreCompleto: string = 'nombre',
    public edad = 0,
    public ubicacion = 'ubicacion',
    public avatarUrl: string = ''
  ) { }

  public fromJSON(usuarioJSON: UsuarioJSON) {
    this.nombreCompleto = usuarioJSON.nombreCompleto
    this.edad = usuarioJSON.edad
    this.ubicacion = usuarioJSON.ubicacion
    this.avatarUrl = usuarioJSON.avatarUrl
  }
}

export class UsuarioFormJSON {
  constructor(
    public nombre: string = "",
    public apellido: string = "",
    public correoElectronico: string = "",
    public calle: string = "",
    public altura: number = 0,
    public localidad: string = "",
    public provincia: string = "",
    public fechaDeNacimiento: Date | string = new Date()
  ) { }
}

export class UsuarioCedido {
  constructor(
    public id: number = 0,
    public nombreUsuario: string = ""
  ) { }

}