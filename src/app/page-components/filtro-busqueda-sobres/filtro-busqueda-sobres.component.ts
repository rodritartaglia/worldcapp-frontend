import { Component } from '@angular/core'
import { BusquedaSobresComponent } from 'src/app/pages/busqueda-sobres/busqueda-sobres.component'

@Component({
  selector: 'app-filtro-busqueda-sobres',
  templateUrl: './filtro-busqueda-sobres.component.html',
  styleUrls: ['./filtro-busqueda-sobres.component.scss']
})
export class FiltroBusquedaSobresComponent {

  constructor(private busquedasobres: BusquedaSobresComponent) { }

  ordenarMenorDistancia() {
    this.busquedasobres.menorDistancia()
  }

  ordenarMasBarato() {
    this.busquedasobres.masBarato()
  }

  ordenarMasSobres() {
    this.busquedasobres.masSobres()
  }

}
