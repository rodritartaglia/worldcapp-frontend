import { FiguritaDTO } from "./figuritaDTO"

export class Jugador {
    public nombre: string = "nombre"
    public peso: number = 0
    public altura: number = 0
    public nroCamiseta: number = 0
    public fechaDeNacimiento: Date = new Date()
    public debut: number = 0
    public posicion: string = "posicion"
    public seleccion: string = "seleccion"
    public cotizacion: number = 0
    public confederacion: string = "confederacion"
    constructor(
        private figurita: FiguritaDTO
    ) { 
        this.nombre = figurita.nombre
        this.peso = figurita.peso
        this.altura = figurita.altura
        this.nroCamiseta = figurita.nroCamiseta
        this.fechaDeNacimiento = figurita.fechaDeNacimiento
        this.debut = figurita.debut
        this.posicion = figurita.posicion
        this.seleccion = figurita.seleccion
        this.cotizacion = figurita.cotizacion
        this.confederacion = figurita.confederacion
    }

}

