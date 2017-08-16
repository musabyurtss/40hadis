import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import 'rxjs/add/operator/take';


import * as hadisAction from './../../modules/ngrx';
import { Hadis } from './../../modules/ngrx';

@Injectable()
export class MainPageResolver implements Resolve<Hadis> {
  constructor(
    private store: Store<any>,
    private action$: Actions
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    // Hadis listesini almak icin action dispatch
    this.store.dispatch({ type: hadisAction.FETCH_HADISS, payload: { skip: 0, limit: 5 } });
    // datayi store dan cek ve data ile birlikte route gerceklestir.
    // state.payload = Hadis: Object
    return this.action$.ofType(hadisAction.FETCH_HADISS_SUCCES)
      .map(state => state.payload)
      .take(1)

  }
}