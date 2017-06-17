import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { Hadis } from '../../_model/hadis';

interface AppState {
  hadis: Hadis;
}

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

  hadisler$: Observable<Hadis[]>;

  constructor(private _store: Store<AppState>) {}

  ngOnInit() {
    this.hadisler$ = this._store.select('hadis');
  }

}
