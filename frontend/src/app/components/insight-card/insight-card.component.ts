import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';

@Component({
  selector: 'insight-card',
  templateUrl: './insight-card.component.html',
  styleUrls: ['./insight-card.component.css']
})
export class InsightCardComponent implements OnInit {

  @Input() card: Card;

  constructor() {
    this.card = new Card(null, null);
  }

  ngOnInit(): void {
  }

}
