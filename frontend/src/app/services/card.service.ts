import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card, Filter } from '../models/card';

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

  buildFilter(filter: Filter) {
    let params = new HttpParams();

    filter.tag ? params = params.set('tag', filter.tag) : params = params.delete('tag');
    filter.limit  ? params = params.set('limit', filter.limit) : params = params.delete('limit');
    filter.offset ? params = params.set('offset', filter.offset) : params = params.delete('offset');

    return params;
  }

  createCard(form: Card): Observable<any> {
    return this.http.post(this.apiURL + '/create', form, this.httpHeaders);
  }

  listCards(filter: Filter): Observable<any> {
    let params = this.buildFilter(filter);
    return this.http.get(this.apiURL + '/list', {params: params
    } );
  }

}
