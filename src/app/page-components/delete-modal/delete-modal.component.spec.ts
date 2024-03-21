import { ComponentFixture, TestBed } from '@angular/core/testing'
import { DeleteModalComponent } from './delete-modal.component'
import { UsuarioService } from 'src/app/services/usuario.service'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ToastrModule, ToastrService } from 'ngx-toastr'

describe('DeleteModalComponent', () => {
  let component: DeleteModalComponent
  let fixture: ComponentFixture<DeleteModalComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteModalComponent],
      imports: [HttpClientTestingModule, ToastrModule.forRoot()],
      providers: [UsuarioService]

    })
    fixture = TestBed.createComponent(DeleteModalComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
