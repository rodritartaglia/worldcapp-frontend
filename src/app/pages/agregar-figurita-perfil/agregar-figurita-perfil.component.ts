import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { lastValueFrom } from 'rxjs'
import { FiguritaDTO } from 'src/app/domain-objects/figuritaDTO'
import { FiguritaService } from 'src/app/services/figurita.service'
import { Location } from '@angular/common'
import { ToastrService } from 'ngx-toastr'
import { handleHttpErrorResponse } from 'src/app/domain-objects/tools'
import { HttpErrorResponse } from '@angular/common/http'
@Component({
  selector: 'app-agregar-figurita-perfil',
  templateUrl: './agregar-figurita-perfil.component.html',
  styleUrls: ['../busqueda-figuritas/busqueda-figuritas.component.scss']
})
export class AgregarFiguritaPerfilComponent {

  constructor(private route: ActivatedRoute, private location: Location, private figuritaService: FiguritaService, private toastr: ToastrService) { }
  
  figuritas!: FiguritaDTO[]
  type!: string
  

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.type = params['type']
    })
    this.getFiguritas()
  }

  async getFiguritas() {
    try { 
      this.figuritas = await lastValueFrom(this.figuritaService.getAllFiguritasDTO())
    } catch (error) { 
      console.error(error) }
  }

  async agregarFigurita(id: number){
    (await this.figuritaService.agregarFigurita(id,this.type)
    .catch(
      (error: HttpErrorResponse) => { 
        this.toastr.error(handleHttpErrorResponse(error),'Algo salio mal')
        throw new Error(handleHttpErrorResponse(error))
      }
    ))
    .subscribe()
      this.location.back()
      this.toastr.success('La figurita ha sido agregada a tu lista de figuritas ' + this.type, 'Figurita Agregada')
    }

}
