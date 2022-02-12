import { Component, OnInit } from '@angular/core';
import { Card } from './../../models/card';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public user = {
    name: 'Nayara',
    email: 'nayara.gomes@g.globo',
  }

  public feedList: Card[] = [];
  public page: number = 1;
  public hasNext: boolean;

  cardsContent: Card[] = [
    new Card('Flamengo consegue boa vitória fora de casa na estréia da Copa Libertadores 2021', null),
    new Card('Primeira partida de um grupo difícil exigiu que o time carioca virasse o placar em dois momentos do jogo', 'Temporada'),
    new Card('O Flamengo não conseguia vencer um time na Argentina há mais de 40 anos', 'Histórico'),
    new Card('Arrascaeta fez a diferença e garantiu a vitória para o time rubro-negro.', 'Jogador'),
    new Card('Mesmo com falhas defensivas recorrentes, o time de Rogério Ceni conseguiu resolver o jogo através das boas atuações de jogadores do meio pra frente. Diego, Gerson e Arrascaeta fizeram boa partida e Gabigol, mais uma vez, converteu uma cobrança de pênalti com bastante segurança. Apesar do erro no primeiro gol do time Argentino, Arão conseguiu marcar e jogar bem', 'Melhor da Partida'),
  ]
  
  constructor() { 
    this.feedList = this.cardsContent.slice((this.page * 4) - 4, (this.page * 4))
    this.hasNext = (this.feedList.length < this.cardsContent.length);
  }

  ngOnInit(): void {
  }

  seeMore(): void {
    this.page++;
    this.feedList = [...this.feedList, ...this.cardsContent.slice((this.page * 4) - 4, (this.page * 4))];
    this.hasNext = (this.feedList.length < this.cardsContent.length);
  }

}
