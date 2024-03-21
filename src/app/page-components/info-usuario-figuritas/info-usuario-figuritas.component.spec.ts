import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoUsuarioFiguritasComponent } from './info-usuario-figuritas.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';

describe('InfoUsuarioFiguritasComponent', () => {
  let component: InfoUsuarioFiguritasComponent;
  let fixture: ComponentFixture<InfoUsuarioFiguritasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoUsuarioFiguritasComponent],
      imports: [HttpClientTestingModule, RouterModule.forRoot([])]
    });
    fixture = TestBed.createComponent(InfoUsuarioFiguritasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
