import { HttpClientModule } from "@angular/common/http"
import { NgModule } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { BrowserModule } from "@angular/platform-browser"
import { RouterOutlet } from "@angular/router"
import { routingComponents, AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { DeleteModalComponent } from "./page-components/delete-modal/delete-modal.component"
import { FiguritaComponent } from "./page-components/figurita/figurita.component"
import { FiltroBusquedaFiguritasComponent } from "./page-components/filtro-busqueda-figuritas/filtro-busqueda-figuritas.component"
import { FiltroBusquedaSobresComponent } from "./page-components/filtro-busqueda-sobres/filtro-busqueda-sobres.component"
import { FooterComponent } from "./page-components/footer/footer.component"
import { HeaderComponent } from "./page-components/header/header.component"
import { InfoUsuarioFiguritasFaltantesComponent } from "./page-components/info-usuario-figuritas-faltantes/info-usuario-figuritas-faltantes.component"
import { InfoUsuarioFiguritasRepetidasComponent } from "./page-components/info-usuario-figuritas-repetidas/info-usuario-figuritas-repetidas.component"
import { InfoUsuarioFormComponent } from "./page-components/info-usuario-form/info-usuario-form.component"
import { MainLayoutComponent } from "./page-components/main-layout/main-layout.component"
import { SearchBarComponent } from "./page-components/search-bar/search-bar.component"
import { AgregarFiguritaPerfilComponent } from "./pages/agregar-figurita-perfil/agregar-figurita-perfil.component"
import { BusquedaFiguritasComponent } from "./pages/busqueda-figuritas/busqueda-figuritas.component"
import { DetallesFiguritaComponent } from "./pages/detalles-figurita/detalles-figurita.component"
import { InfoUsuarioFiguritasComponent } from "./page-components/info-usuario-figuritas/info-usuario-figuritas.component"
import { ToastNoAnimationModule } from "ngx-toastr"
import { PuntoDeVentaComponent } from "./pages/punto-de-venta/punto-de-venta.component"

@NgModule({
  declarations: [
    AppComponent,
    PuntoDeVentaComponent,
    FiguritaComponent,
    FooterComponent,
    HeaderComponent,
    routingComponents,
    BusquedaFiguritasComponent,
    FiltroBusquedaFiguritasComponent,
    FiltroBusquedaSobresComponent,
    DetallesFiguritaComponent,
    InfoUsuarioFormComponent,
    InfoUsuarioFiguritasComponent,
    InfoUsuarioFiguritasRepetidasComponent,
    InfoUsuarioFiguritasFaltantesComponent,
    AgregarFiguritaPerfilComponent,
    SearchBarComponent,
    MainLayoutComponent,
    DeleteModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterOutlet,
    HttpClientModule,
    ToastNoAnimationModule.forRoot()
  ],
  providers: [DeleteModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
