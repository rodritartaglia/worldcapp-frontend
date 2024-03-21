import { Component, Input } from '@angular/core'
import { FiguritaDTO } from 'src/app/domain-objects/figuritaDTO'

@Component({
  selector: 'app-info-usuario-figuritas',
  templateUrl: './info-usuario-figuritas.component.html',
  styleUrls: ['./info-usuario-figuritas.component.scss']
})
export class InfoUsuarioFiguritasComponent {

  @Input() list!: FiguritaDTO[]
  @Input() type!: string

  modalState: boolean = false
  modalFiguritaId!: number
  modalFiguritaNombre!: string
  modalFiguritaNumero!: number

  activateModal(id: number) {
    this.modalFiguritaId = id
    this.modalState = true
  }

  deactivateModal() {
    this.modalState = false
    window.location.reload()
  }
  
}
