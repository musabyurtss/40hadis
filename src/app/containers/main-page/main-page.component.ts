import { ActivatedRoute } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { Hadis, FETCH_HADISS, FETCH_HADISS_SUCCES } from './../../modules/ngrx';

import { Component, OnInit, ChangeDetectionStrategy, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Store } from '@ngrx/store';
import { Actions } from '@ngrx/effects';

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

  hadisArrayInit = [];
  containerArr: Observable<any>;
  loading$;

  start = 0;
  end = 5;
  pageItemSize = 5;


  obHadisArr;
  constructor(
    private route: ActivatedRoute,
    private store: Store<any>,
    private action$: Actions) { }

  ngOnInit() {
    this.containerArr = this.store.select('hadis')
      .map(state => {
        this.hadisArrayInit = state['hadiss']
        return this.hadisArrayInit;
      });
    // this.hadisArray = this.route.snapshot.data['hadiss'];
  }


  getir() {
    this.start += this.pageItemSize;

    this.loading$ = this.store.select('hadis').map((s) => s['loading'])
    this.store.dispatch({ type: FETCH_HADISS, payload: { skip: this.start, limit: this.end } });

    this.containerArr = this.store.select('hadis')
      .map(state => {
        return state['hadiss']
      })

  }

}

