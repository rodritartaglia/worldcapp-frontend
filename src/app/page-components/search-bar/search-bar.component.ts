import { FiltroFiguritaService } from './../../services/filtro-figurita.service';
import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Figurita } from 'src/app/domain-objects/figurita'
import { SearchBarService } from 'src/app/services/search-bar.service'

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  constructor(private searchBarService: SearchBarService, private filtroService: FiltroFiguritaService) { }

  @Output() notificarCambio = new EventEmitter()
  @Input() valorABuscar!: string | null

    buscarFigurita(){
      this.filtroService.changeBusqueda(this.valorABuscar)
      this.notificarCambio.emit()
    }

}
