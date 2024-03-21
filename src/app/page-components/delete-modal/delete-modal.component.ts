import { Component, Output, EventEmitter, Input } from '@angular/core'
import { FiguritaService } from 'src/app/services/figurita.service'

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent {


  @Input() type!: string
  @Input() id!: number
  @Output() deactivateModalEvent = new EventEmitter()

  constructor(private figuritaService: FiguritaService){}

  async deleteCard(){
    try{
      (await this.figuritaService.deleteFigurita(this.id,this.type)).subscribe()
      this.deactivateModalEvent.emit()
    }  
    catch(e){
      console.log(e)
    }
  }

  deactivateModal() {
    this.deactivateModalEvent.emit()
  }

}
