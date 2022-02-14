import { Filter } from './../../models/card';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() filter = new EventEmitter<any>();

  searchFilter: Filter = new Filter(null, 30, 0);
  constructor() {
  }

  search(value: Filter) {
    this.filter.emit(value);
  }

  ngOnInit(): void {
  }

}
