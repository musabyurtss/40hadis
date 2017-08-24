import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/toPromise';


import { Hadis, getHadisCollection, State } from './../../modules/ngrx';

@Injectable()
export class MainPageResolver implements Resolve<Hadis[]> {
  constructor(
    private store: Store<State>,
    private action$: Actions
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Hadis[]> {
    // console.log(this.store.select(getHadisCollection));

    return this.store.select(getHadisCollection).filter(h => !!h.length).take(1);

    // // Hadis listesini almak icin action dispatch
    // this.store.dispatch({ type: hadisAction.FETCH_HADISS, payload: { skip: 0, limit: 5 } });
    // // datayi store dan cek ve data ile birlikte route gerceklestir.
    // // state.payload = Hadis: Object
    // return this.action$.ofType(hadisAction.FETCH_HADISS_SUCCES)
    //   .map(state => state.payload)
    //   .take(1)

  }
}