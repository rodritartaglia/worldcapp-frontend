import { ComponentFixture, TestBed } from '@angular/core/testing'
import { HeaderComponent } from './header.component'
import { RouterTestingModule } from '@angular/router/testing'
import { RouterModule } from '@angular/router'
import { HttpClientTestingModule } from '@angular/common/http/testing'
describe('HeaderComponent', () => {
  let component: HeaderComponent
  let fixture: ComponentFixture<HeaderComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({

      imports: [RouterTestingModule, RouterModule, HttpClientTestingModule],
      declarations: [HeaderComponent]
    })
    fixture = TestBed.createComponent(HeaderComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
