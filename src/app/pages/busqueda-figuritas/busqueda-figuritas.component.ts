
import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { lastValueFrom } from 'rxjs'
import { Figurita } from 'src/app/domain-objects/figurita'
import { FiguritaDTO } from 'src/app/domain-objects/figuritaDTO'
import { FiguritaService } from 'src/app/services/figurita.service'

@Component({
  selector: 'app-busqueda-figuritas',
  templateUrl: './busqueda-figuritas.component.html',
  styleUrls: ['./busqueda-figuritas.component.scss']
})

export class BusquedaFiguritasComponent implements OnInit {

  figuritas!: FiguritaDTO[]

  constructor(private router: Router, private figuritaService: FiguritaService) { }

  ngOnInit() {
    this.getFiguritas()
  }

  async getFiguritas() {
    try {
      this.figuritas = await lastValueFrom(this.figuritaService.getAllFiguritasDTO())
      console.log(this.figuritas)
    } catch (error) {
      console.error(error)
    }
  }

  // figurita.cedidaPor.nombreUsuario, figurita.cedidaPor.id , figurita.numero
  //[routerLink]="['/main/detallesFigurita', figurita.cedidaPor.nombreUsuario, figurita.cedidaPor.id , figurita.numero]"
  
  verFigurita(figurita: FiguritaDTO) {
    this.router.navigate(['/main/detallesFigurita', figurita.cedidaPor.nombreUsuario, figurita.cedidaPor.id , figurita.id])
  }

}
