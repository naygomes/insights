import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import {MatSnackBar} from '@angular/material/snack-bar';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Card } from 'src/app/models/card';
import { Router } from '@angular/router';

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

  constructor(private router: Router, private _snackBar: MatSnackBar) {
    this.form = new Card(null, null);
  }

  ngOnInit(): void {
  }

  postInsight() {
    this.router.navigate(['/home']);
    this.openSnackBar();
  }
  
  openSnackBar() {
    this._snackBar.open('Insight Postado com Sucesso!', 'x', {
      duration: 3000
    });
  }
}
