import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AppModule } from '../app.module';
import { BuscarComponent } from './buscar.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('BuscarComponent', () => {
  let component: BuscarComponent;
  let fixture: ComponentFixture<BuscarComponent>;
  const routerSpy = {navigate: jasmine.createSpy('navigate')};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
        RouterTestingModule.withRoutes([]),
        ReactiveFormsModule
    ],
      declarations: [ BuscarComponent ],
      providers: [
        { provide: Router, useValue: routerSpy }
      ]

    })
    .compileComponents();
    fixture = TestBed.createComponent(BuscarComponent);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it(`should redirect to /listar/Charizard`, () => {
  //   spyOn(routerSpy, 'navigate').and.stub();

  //   component.buscaForm.controls.nome.setValue('Charizard');
  //   fixture.detectChanges();

  //   expect(routerSpy.navigate).toHaveBeenCalledWith(['/listar/Charizard']);
  // });
});
