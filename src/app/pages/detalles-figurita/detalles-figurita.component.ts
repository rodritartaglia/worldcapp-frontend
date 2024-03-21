import { ToastrService } from 'ngx-toastr'
import { FiguritaService } from './../../services/figurita.service'
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { FiguritaDTO } from 'src/app/domain-objects/figuritaDTO'
import { handleBussinessObservable, handleBussinessPromise } from 'src/app/domain-objects/tools'
import { HttpErrorResponse } from '@angular/common/http'

@Component({
  selector: 'app-detalles-figurita',
  templateUrl: './detalles-figurita.component.html',
  styleUrls: ['./detalles-figurita.component.scss']
})
export class DetallesFiguritaComponent implements OnInit{

  figurita!: FiguritaDTO

  constructor(private figuritaService:FiguritaService , private route: ActivatedRoute, private toastr:ToastrService) {}

  ngOnInit() {
    this.getInfo()
  }

  async getInfo(){
    let figuritaNumeroId!: number
    let figuritaDuenioId!: number
    this.route.params.subscribe(params => {
      figuritaDuenioId = params['idDuenio']
      figuritaNumeroId = params['idFigurita']
    })
    const figurita = await this.figuritaService.getFiguritaInfo(figuritaNumeroId, figuritaDuenioId)
    if (!figurita) {return}
    this.figurita = figurita
  }

  async solicitar() {
      (await this.figuritaService.solicitarFigurita(this.figurita.cedidaPor.id, this.figurita.id)
      .catch((error: HttpErrorResponse) => {
        this.toastr.error(handleBussinessObservable(error),'No se ha podido enviar figurita')
        throw new Error(handleBussinessObservable(error))
      })
      ).subscribe()
      this.toastr.success(`La figurita de ${this.figurita.nombre} se ha intercambiado exitosamente con ${this.figurita.cedidaPor.nombreUsuario}`, 'Figurita Intercambiada')
    }

}