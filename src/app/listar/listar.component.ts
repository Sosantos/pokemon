import { Component, OnInit } from '@angular/core';
import { ICard } from '../models/ICard';
import { CardsService } from '../services/cards.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.sass']
})
export class ListarComponent implements OnInit {

  cartas: Array<ICard>;
  nome: string;
  constructor(
    private cardsService: CardsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.nome = this.activatedRoute.snapshot.paramMap.get('nome');
    this.getCards();
  }

  getCards() {
    this.cardsService.getCards(this.nome).subscribe((cards) => {
      this.cartas = JSON.parse(JSON.stringify(cards.cards));
      // this.cartas.sort((a, b) => a.name > b.name ? -1 : 1);
    });
  }

}
