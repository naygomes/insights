import { Component, OnInit, HostBinding } from '@angular/core';
import { Card } from 'src/app/models/card';
declare var $: any;

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent implements OnInit {
  
  public form: Card;

  constructor() {
    this.form = new Card(null, null);
  }

  ngOnInit(): void {
  }

  postInsight() {
   
  }
}
