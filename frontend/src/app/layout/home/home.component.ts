import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';
import { Card, Filter } from './../../models/card';
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

  public feedList: any = [];
  public page: number = 1;

  public filter = new Filter(null, 30, 0);

  public hasNext: boolean;

  cardsContent: any = [];
  
  constructor(private cardService: CardService) { 
    this.feedList = this.cardsContent.slice((this.page * 4) - 4, (this.page * 4));
    this.hasNext = (this.feedList.length < this.cardsContent.length);
    this.filter = new Filter(null, 30, 0);
  }

  ngOnInit(): void {
    this.listCards(this.filter);
  }

  listCards(filter: Filter) {
    this.cardService.listCards(filter).subscribe(res => {
      this.cardsContent = [...this.cardsContent, ...res.cards];
      this.feedList = [...this.feedList, ...this.cardsContent.slice((this.page * 4) - 4, (this.page * 4))];
      this.hasNext = res.cards.length === 30;
      console.log(this.filter.offset, this.feedList);
    })
  }

  search(event: any){
    this.cardsContent = [];
    this.feedList = [];
    this.listCards(event);
  }

  seeMore(): void {
    this.page++;
    if (this.hasNext && this.feedList[this.feedList.length - 1].id === this.cardsContent[this.cardsContent.length - 1].id){
      this.filter.offset = (this.cardsContent.length / 30);
      this.listCards(this.filter);
    }
    this.feedList = [...this.feedList, ...this.cardsContent.slice((this.page * 4) - 4, (this.page * 4))];

  }

}
