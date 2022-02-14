import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  apiURL:string = 'http://localhost:3333/card';

  httpHeaders: any = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }

  constructor(public http: HttpClient) { }

  createCard(form: Card): Observable<any> {
    console.log(form);
    return this.http.post(this.apiURL + '/create', form, this.httpHeaders);
  }

}
