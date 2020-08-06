import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.sass']
})

export class BuscarComponent implements OnInit {
  nome = '';
  buscaForm: FormGroup;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.buscaForm = new FormGroup({
      nome : new FormControl()
    });
  }

  onFormSubmit(): void{
    this.nome = this.buscaForm.get('nome').value;
    this.router.navigate(['/listar/' + this.nome]);
  }

}
