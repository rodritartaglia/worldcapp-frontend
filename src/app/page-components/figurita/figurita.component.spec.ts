import { FiguritaComponent } from 'src/app/page-components/figurita/figurita.component';
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { Figurita } from 'src/app/domain-objects/figurita'
import { FiguritaService } from 'src/app/services/figurita.service';
import { FiguritaDTO } from 'src/app/domain-objects/figuritaDTO';

describe('FiguritaComponent', () => {
  let component: FiguritaComponent
  let fixture: ComponentFixture<FiguritaComponent>

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [FiguritaComponent],
      providers: [FiguritaService]
    })
    fixture = TestBed.createComponent(FiguritaComponent)
    component = fixture.componentInstance
    //component.figuritaDTO = new FiguritaDTO()

    fixture.detectChanges()
  })

  it('Crea el componente', () => {
    expect(component).toBeTruthy()
  })
})
