import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Hadis, HadisState, State, getHadisCollection } from './../../modules/ngrx';


import { Store } from '@ngrx/store';
import { Actions } from '@ngrx/effects';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/merge';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent implements OnInit {
  containerArr: Observable<any>;
  loading$: Observable<any>;

  currentPage = 1;
  pageItemSize = 6;

  constructor(
    private route: ActivatedRoute,
    private store: Store<State>,
    private action$: Actions) { }

  ngOnInit() {
    this.containerArr = Observable.of(this.route.snapshot.data['hadiss']);
  }


  getir() {
    this.currentPage++;
    console.log(this.currentPage);
    
    this.store.dispatch({ type: "HADIS_LIST_EXTEND", payload: {currentPage: this.currentPage, pageSize: this.pageItemSize} });
    this.containerArr = this.store.select(getHadisCollection)
      .map(list => list);
  }

}

