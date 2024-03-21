import { UsuarioCedido } from "./usuario"

export class FiguritaDTO {

    constructor(
        public id: number = 0,
        public numero: number = 0,
        public nombre: string = '',
        public valoracion: number = 0,
        public peso: number = 0,
        public altura: number = 0,
        public onFire: boolean = false,
        public promesa: boolean = false,
        public nroCamiseta: number = 0,
        public fechaDeNacimiento: Date = new Date(),
        public seleccion: string = '',
        public posicion: string = '',
        public cotizacion: number = 0,
        public debut: number = 0,
        public confederacion: string = '',
        public nivelDeImpresion: string,
        public valoracionBase: number,
        public esLider: boolean,
        public cedidaPor: UsuarioCedido,
    ) { }

}