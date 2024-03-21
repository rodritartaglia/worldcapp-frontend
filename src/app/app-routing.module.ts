import { NgModule, inject } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from './pages/login/login.component'
// import { FiguritaComponent } from './page-components/figurita/figurita.component'
import { BusquedaSobresComponent } from './pages/busqueda-sobres/busqueda-sobres.component'
import { InfoUsuarioComponent } from './pages/info-usuario/info-usuario.component'
import { BusquedaFiguritasComponent } from './pages/busqueda-figuritas/busqueda-figuritas.component'
import { DetallesFiguritaComponent } from './pages/detalles-figurita/detalles-figurita.component'
import { InfoUsuarioFormComponent } from './page-components/info-usuario-form/info-usuario-form.component'
import { InfoUsuarioFiguritasRepetidasComponent } from './page-components/info-usuario-figuritas-repetidas/info-usuario-figuritas-repetidas.component'
import { InfoUsuarioFiguritasFaltantesComponent } from './page-components/info-usuario-figuritas-faltantes/info-usuario-figuritas-faltantes.component'
import { LoginService } from './services/login.service'
import { FiguritaComponent } from './page-components/figurita/figurita.component'
import { AgregarFiguritaPerfilComponent } from './pages/agregar-figurita-perfil/agregar-figurita-perfil.component'
import { MainLayoutComponent } from './page-components/main-layout/main-layout.component'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'main', component: MainLayoutComponent, canActivate: [() => inject(LoginService).canActivate()], children: [
      { path: 'busquedaFiguritas', component: BusquedaFiguritasComponent },
      { path: 'agregarFigurita/:type', component: AgregarFiguritaPerfilComponent },
      { path: 'detallesFigurita/:duenioFigu/:idDuenio/:idFigurita', component: DetallesFiguritaComponent },
      { path: 'busquedaSobres', component: BusquedaSobresComponent },
      {
        path: 'infoUsuario', component: InfoUsuarioComponent,
        children: [
          { path: 'formulario', component: InfoUsuarioFormComponent },
          { path: 'figuritasRepetidas', component: InfoUsuarioFiguritasRepetidasComponent },
          { path: 'figuritasFaltantes', component: InfoUsuarioFiguritasFaltantesComponent }
        ]
      },
    ]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: '/main/busquedaFiguritas' }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  LoginComponent,
  InfoUsuarioComponent,
  BusquedaFiguritasComponent,
  BusquedaSobresComponent,
  DetallesFiguritaComponent,
  InfoUsuarioFiguritasFaltantesComponent,
  InfoUsuarioFiguritasRepetidasComponent,
  InfoUsuarioFormComponent,
  FiguritaComponent
]
