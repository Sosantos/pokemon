import { Component } from '@angular/core';
import { CardsService } from './services/cards.service';
import { ICartas } from './models/ICartas';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'pokemon';
  cartas: ICartas;
  constructor(private cardsService: CardsService) {}

  ngOnInit() {
    this.getCards();
  }

  // Chama o serviço para obtém todos os carros
  getCards() {
    this.cardsService.getCards().subscribe((cards: ICartas) => {
      this.cartas = cards;
    });
  }

}
