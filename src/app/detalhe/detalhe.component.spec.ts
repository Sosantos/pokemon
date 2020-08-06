// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { DetalheComponent } from './detalhe.component';
// import { Router } from '@angular/router';
// import { CardsService } from '../services/cards.service';
// import { inject } from '@angular/core';
// import { ICard } from '../models/ICard';

// class MockCardsService extends CardsService {
//   carta: ICard = {
//     id: 'xy7-54',
//     name: 'Gardevoir',
//     imageUrl: 'https://images.pokemontcg.io/xy7/54.png',
//     imageUrlHiRes: "https://images.pokemontcg.io/base5/20_hires.png",
//     subtype: 'Stage 2',
//     supertype: 'Pokémon',
//   };

//   getCard('id') {
//     return this.carta;
//   }
// }

// describe('DetalheComponent', () => {
//   let component: DetalheComponent;
//   let fixture: ComponentFixture<DetalheComponent>;
//   let routerSpy;
//   let componentService: CardsService;
//   let testBedService: CardsService;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ DetalheComponent ],
//       providers: [
//         { provide: Router, useValue: routerSpy },
//         { provide: CardsService, useClass: MockCardsService }
//       ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(DetalheComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//     routerSpy = {navigate: jasmine.createSpy('navigate')};
//     testBedService = TestBed.get(CardsService);
//     componentService = fixture.debugElement.injector.get(CardsService);
//   });

//   it('Service injected via component should be and instance of CardsService', () => {
//       expect(componentService instanceof CardsService).toBeTruthy();
//   });

// //   it('Service injected via inject(...) and TestBed.get(...) should be the same instance',
// //     inject([CardsService], (injectService: CardsService) => {
// //       expect(injectService).toBe(testBedService);
// //     })
// // );

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
