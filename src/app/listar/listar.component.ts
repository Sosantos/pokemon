import { Component, OnInit } from '@angular/core';
import { ICard } from '../models/ICard';
import { CardsService } from '../services/cards.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.sass']
})
export class ListarComponent implements OnInit {

  cartas: Array<ICard>;
  constructor(private cardsService: CardsService) {}

  ngOnInit() {
    this.getCards();
  }

  getCards() {
    this.cardsService.getCards().subscribe((cards) => {
      this.cartas = JSON.parse(JSON.stringify(cards.cards));
    });
  }

}
