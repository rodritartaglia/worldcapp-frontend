import { Component, OnInit } from '@angular/core'
import { FiguritaDTO } from 'src/app/domain-objects/figuritaDTO'
import { FiguritaService } from 'src/app/services/figurita.service'
import { UsuarioService } from 'src/app/services/usuario.service'


@Component({
  selector: 'app-info-usuario-figuritas-repetidas',
  templateUrl: './info-usuario-figuritas-repetidas.component.html',
  styleUrls: ['./info-usuario-figuritas-repetidas.component.scss']
})
export class InfoUsuarioFiguritasRepetidasComponent implements OnInit {

  figuritas!: FiguritaDTO[]
  type = "repetidas"

  constructor (private figuritaService: FiguritaService) {}

  async ngOnInit() {
    await this.getFiguritas()
  }

  async getFiguritas(){
    const figuritas = await this.figuritaService.getFiguritasUser(this.type)
    this.figuritas = figuritas
  }

}
