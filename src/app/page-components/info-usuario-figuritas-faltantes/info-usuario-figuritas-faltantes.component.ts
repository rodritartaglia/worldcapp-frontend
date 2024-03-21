import { Component, OnInit } from '@angular/core'
import { FiguritaDTO } from 'src/app/domain-objects/figuritaDTO'
import { FiguritaService } from 'src/app/services/figurita.service'

@Component({
  selector: 'app-info-usuario-figuritas-faltantes',
  templateUrl: './info-usuario-figuritas-faltantes.component.html',
  styleUrls: ['./info-usuario-figuritas-faltantes.component.scss']
})
export class InfoUsuarioFiguritasFaltantesComponent implements OnInit {

  figuritas!: FiguritaDTO[]
  type = "faltantes"

  constructor (private figuritaService: FiguritaService) {}

  async ngOnInit() {
    await this.getFiguritas()
  }

  async getFiguritas(){
    this.figuritas = await this.figuritaService.getFiguritasUser(this.type)
  }

}
