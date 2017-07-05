import { Router } from '@angular/router';
import { Hadis } from './../../models/hadis';

import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as reducer from '../../reducers';
import * as hadis from '../../actions/hadis';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent implements OnInit {

  hadisler$: Observable<Hadis[]>;
  loading$: Observable<boolean>

  constructor(private router: Router, private _store: Store<any>) { }

  ngOnInit() {
    this._store.dispatch(new hadis.FetchHadissAction());
    this.hadisler$ = this._store.select(reducer.getHadisList);
    this.loading$ = this._store.select(reducer.getHadisListLoading);
  }

  hadiseGit(id) {
    this.router.navigate(['/hadis', id])
  }
}
