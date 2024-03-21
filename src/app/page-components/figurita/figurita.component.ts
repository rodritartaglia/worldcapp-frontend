import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core'
import { FiguritaDTO } from 'src/app/domain-objects/figuritaDTO'

@Component({
  selector: 'app-figurita',
  templateUrl: './figurita.component.html',
  styleUrls: ['./figurita.component.scss']
})
export class FiguritaComponent{
  
  @Output() activateModalEvent = new EventEmitter<number>()
  @Input() figuritaDTO!: FiguritaDTO
  @Input() eliminable!: boolean
  @Input() cedida!: boolean

  activateModal() {
    this.activateModalEvent.emit(this.figuritaDTO.id)
  }

}

