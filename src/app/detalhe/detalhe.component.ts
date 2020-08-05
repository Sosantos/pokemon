import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CardsService } from '../services/cards.service';
import { ICard } from '../models/ICard';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.sass']
})
export class DetalheComponent implements OnInit {

  carta: ICard;
  id: string;

  constructor(
    private cardsService: CardsService,
    private activatedRoute: ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getCard();
  }

  getCard() {
    this.cardsService.getCard(this.id).subscribe((card) => {
      this.carta = JSON.parse(JSON.stringify(card.card));
      console.log(this.carta);
    });
  }

}
