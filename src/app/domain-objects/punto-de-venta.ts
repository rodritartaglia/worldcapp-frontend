export class PuntoDeVenta {
  constructor(
    public nombre: string = "test",
    public direccion: string = "test",
    public ubicacionGeografica: string = "test",
    public distancia: number = 0,
    public stock: number = 0,
    public precioPorSobre: number = 0,
    public icon: string = "test"
  ) { }
}