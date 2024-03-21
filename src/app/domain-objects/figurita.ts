import { Confederacion } from "./confederacion"

export class Figurita {
    
    constructor(
        // public jugador:Jugador = new Jugador(),
        public numero: number = 5, 
        public image_jugador:string = "assets/player.jpg",
        public valoracion: number = 124,
        public onFire: boolean = false,
        public confederacion: Confederacion = new Confederacion()
        ) {}

}