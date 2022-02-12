import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Card } from 'src/app/models/card';

export interface Tag {
  name: string;
}
@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent implements OnInit {

  public form: Card;

  public hasTag: boolean = false;

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.form.tag = value;
      this.hasTag = true;
    }
    // Clear the input value
    event.chipInput!.clear();
  }

  remove(): void {
    this.form.tag = null;
    this.hasTag = false;
  }

  constructor() {
    this.form = new Card(null, null);
  }

  ngOnInit(): void {
  }

  postInsight() {

  }
}
