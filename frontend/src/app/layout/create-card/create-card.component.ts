import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatSnackBar } from '@angular/material/snack-bar';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Card } from 'src/app/models/card';
import { Router } from '@angular/router';
import { CardService } from 'src/app/services/card.service';

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

  public array: string[] = [];

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.array.push(value);
    }
    event.chipInput!.clear();
  }

  remove(item: string): void {
    const index = this.array.indexOf(item);

    if (index >= 0) {
      this.array.splice(index, 1);
    }
  }

  constructor(private router: Router, private _snackBar: MatSnackBar, private cardService: CardService) {
    this.form = new Card(null, null);
  }

  ngOnInit(): void {
  }

  postInsight() {
    this.form.tags = this.array.join(';');
    this.cardService.createCard(this.form).subscribe(res => {
      this.router.navigate(['/home']);
      this.openSnackBar();
      console.log(res);
    });
  }

  openSnackBar() {
    this._snackBar.open('Insight Postado com Sucesso!', 'x', {
      duration: 3000
    });
  }
}
