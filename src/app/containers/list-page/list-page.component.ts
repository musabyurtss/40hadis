import { Hadis } from './../../models/hadis';
import { HadisDataService } from './../../services/hadis.data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as reducer from '../../reducers';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

  hadisler$: Observable<Hadis[]>;

  constructor(private _store: Store<any>) { }

  ngOnInit() {
    this._store.dispatch({ type: 'FETCH_HADISS' });
    this.hadisler$ = this._store.select(reducer.getHadisList);
  }
}
