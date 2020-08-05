import { Component, OnInit } from '@angular/core';
import { CardsService } from './services/cards.service';
import { ICard } from './models/ICard';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'pokemon';
  cartas: Array<ICard>;
  constructor(private cardsService: CardsService) {}

  ngOnInit() {
    this.getCards();
  }

  // Chama o serviço para obtém todos os carros
  getCards() {
    this.cardsService.getCards().subscribe((cards) => {
      this.cartas = JSON.parse(JSON.stringify(cards.cards));
    });
  }

}
